import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { CiSearch } from "react-icons/ci";
import { BiFilterAlt } from "react-icons/bi";
import Edit_icon from "../../assets/edit_icon.png";
import Copy_icon from "../../assets/copy_icon.png";
import toast from "react-hot-toast";
import { search_dropdown, filter_dropdown } from "../../data/Data";

const Hero = () => {
  const [dropdown, setDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  const searchRef = useRef(null);
  const filterRef = useRef(null);
  const dropdownRef = useRef(null);
  const [searchData, setSearchData] = useState(search_dropdown);
  const [search, setSearch] = useState("");

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(e.target) &&
      filterRef.current &&
      !filterRef.current.contains(e.target)
    ) {
      setDropdown(false);
      setSearchDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent scroll lock by allowing natural page scrolling when reaching top or bottom
  const handleDropdownScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (scrollTop === 0) {
      e.target.scrollTop = 1;
    } else if (scrollTop + clientHeight === scrollHeight) {
      e.target.scrollTop -= 1;
    }
  };

  // Group filter items by category
  const groupedFilters = filter_dropdown.reduce((acc, item) => {
    if (!acc[item.filter_header]) {
      acc[item.filter_header] = [];
    }
    acc[item.filter_header].push(item);
    return acc;
  }, {});

  return (
    <div className="hero">
      <div className="hero-top"></div>
      <div className="hero-container">
        <div className="top-header">
          <div className="header">
            <h5>Ruut Canned Responses Library</h5>
          </div>
          <h1>
            Tailored Canned Response <br /> that’s highly customizable.
          </h1>
        </div>

        <div className="input-fields">
          {/* Search Bar */}
          <div className="searchbar-container" ref={searchRef}>
            <div className="searchbar" onClick={() => setSearchDropdown(true)}>
              <span>
                <CiSearch
                  size={20}
                  style={{
                    color: "#6B7280",
                    position: "relative",
                    left: "25px",
                    top: "1px",
                  }}
                />
              </span>
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder='Search for "How can I help?"'
              />
            </div>

            {searchDropdown && (
              <div
                className="search-dropdown-container"
                ref={dropdownRef}
                onWheel={handleDropdownScroll}
              >
                {searchData
                  .filter((item) =>
                    search.trim() === ""
                      ? true
                      : item.text_1
                          ?.toLowerCase()
                          .includes(search.toLowerCase()) ||
                        item.text_2
                          ?.toLowerCase()
                          .includes(search.toLowerCase()) ||
                        item.status
                          ?.toLowerCase()
                          .includes(search.toLowerCase())
                  )
                  .map((item, i) => (
                    <div className="search-dropdown" key={i}>
                      <div className="search-items">
                        <p className="user-text">{item.text_1}</p>
                      </div>
                      <div className="search-subitems">
                        <p className={`search-subitems-text ${item.status}`}>
                          {item.text_2}
                        </p>
                        <div className="icons">
                          <img src={Edit_icon} alt="Edit" />
                          <img src={Copy_icon} alt="Copy" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Filter Dropdown */}
          <div className="filter-container" ref={filterRef}>
            <div className="filter-bar" onClick={() => setDropdown(!dropdown)}>
              <BiFilterAlt size={15} style={{ color: "#FFFFFF" }} />
              <p style={{ fontSize: "15px", fontWeight: "400" }}>Filter</p>
            </div>

            {dropdown && (
              <div className="filter-dropdown-container">
                <div className="filter-dropdown">
                  <div className="scroll">
                    <div className="filter-searchbar">
                      <span>
                        <CiSearch
                          size={20}
                          style={{
                            color: "#6B7280",
                            position: "relative",
                            left: "25px",
                            top: "1px",
                          }}
                        />
                      </span>
                      <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        placeholder="Search for"
                      />
                    </div>
                    <div className="filter-items">
                      {Object.entries(groupedFilters)
                        .map(([header, items], index) => {
                          const filteredItems = items.filter((item) =>
                            search.trim() === ""
                              ? true
                              : item.filter_text
                                  ?.toLowerCase()
                                  .includes(search.toLowerCase())
                          );

                          if (filteredItems.length === 0) return null; // Hide empty groups

                          return (
                            <div className="items" key={index}>
                              <h5 style={{ marginTop: "10px" }}>{header}</h5>
                              {filteredItems.map((item, i) => (
                                <div className="item-info" key={i}>
                                  <p className="text">{item.filter_text}</p>
                                  <p className="n0">{item.filter_no}</p>
                                </div>
                              ))}
                              <hr />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lorem"></div>
      </div>
    </div>
  );
};

export default Hero;
