import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { CiSearch } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Copy_icon from "../../assets/copy_icon.png";
import { search_dropdown, filter_dropdown } from "../../data/Data";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState(new Set());
  const [copiedText, setCopiedText] = useState(null);
  const filterRef = useRef(null);

  const groupedFilters = filter_dropdown.reduce((acc, item) => {
    if (!acc[item.filter_header]) {
      acc[item.filter_header] = [];
    }
    acc[item.filter_header].push(item);
    return acc;
  }, {});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (filterText) => {
    setSelectedFilters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(filterText)) {
        newSet.delete(filterText);
      } else {
        newSet.add(filterText);
      }
      return newSet;
    });
    // Removed the setIsFilterOpen(false) to keep dropdown open
  };

  const clearFilters = (e) => {
    e.stopPropagation();
    setSelectedFilters(new Set());
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const filteredSearchResults = search_dropdown.filter((item) => {
    const matchesSearch = search.trim() === ""
      ? true
      : [item.text_1, item.text_2, item.status].some(
          text => text?.toLowerCase().includes(search.toLowerCase())
        );

    const matchesFilter = selectedFilters.size === 0
      ? true
      : [item.text_1, item.text_2, item.status].some(
          text => Array.from(selectedFilters).some(filter => 
            text?.toLowerCase().includes(filter.toLowerCase())
          )
        );

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="hero">
      <div className="hero-top"></div>
      <div className="hero-container">
        <div className="top-header">
          <div className="header">
            <h5>Ruut Canned Responses Library</h5>
          </div>
          <h1>
            Tailored Canned Response <br /> that's highly customizable.
          </h1>
        </div>

        <div className="input-fields-wrapper" style={{marginTop: '-40px'}}>
          <div className="input-fields">
            <div className="searchbar-container">
              <div className="searchbar">
                <CiSearch style={{marginTop: "16px", marginBottom: "16px"}} size={20} className="search-icon" />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder='Search for "How can I help?"'
                />
              </div>
            </div>

            <div className="filter-container" ref={filterRef}>
              <div 
                className="filter-bar"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <BiFilterAlt size={15} />
                <p>Filter</p>
                {selectedFilters.size > 0 && (
                  <AiOutlineClose 
                    size={15} 
                    onClick={clearFilters}
                    className="clear-filter-icon"
                  />
                )}
              </div>

              {isFilterOpen && (
                <div className="filter-dropdown-container">
                  <div className="filter-searchbar">
                    <CiSearch size={20} style={{marginTop: "2px", marginLeft: "12px"}} className="search-icon" />
                    <input
                      onChange={(e) => setFilterSearch(e.target.value)}
                      value={filterSearch}
                      type="text"
                      placeholder="Search for"
                    />
                  </div>
                  <div className="filter-items">
                    {Object.entries(groupedFilters).map(([header, items], index) => {
                      const filteredItems = items.filter((item) =>
                        filterSearch.trim() === ""
                          ? true
                          : item.filter_text.toLowerCase().includes(filterSearch.toLowerCase())
                      );
                      if (filteredItems.length === 0) return null;
                      return (
                        <div className="items" key={index}>
                          <h5>{header}</h5>
                          {filteredItems.map((item, i) => (
                            <div 
                              className={`item-info ${selectedFilters.has(item.filter_text) ? 'selected' : ''}`}
                              key={i}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleFilterSelect(item.filter_text);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <p className="text">{item.filter_text}</p>
                              <p className="n0">{item.filter_no}</p>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="dropdowns-container">
            <div className="search-dropdown-container">
              {filteredSearchResults.map((item, i) => (
                <div className="search-dropdown" key={i}>
                  <div className="search-items">
                    <p className="user-text">{item.text_1}</p>
                  </div>
                  <div className="search-subitems">
                    <p className={`search-subitems-text ${item.status}`}>{item.text_2}</p>
                    <div className="icons" onClick={() => handleCopy(item.text_1)}>
                      {copiedText === item.text_1 ? <AiOutlineCheck size={20} color="gray" /> : <img src={Copy_icon} alt="Copy" style={{ cursor: "pointer" }} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;