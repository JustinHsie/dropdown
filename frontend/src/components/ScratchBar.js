import React, { useState } from 'react';
import './ScratchBar.css';

export default function ScratchBar(props) {
  // State
  const [showDropdown, setShowDropdown] = useState(false);

  // Filter function
  function filterFunction() {
    let input = props.value.toUpperCase();
    let dropdownDiv = document.getElementById('dropdown-scratch');
    let anchorTags = dropdownDiv.getElementsByTagName('a');

    // Filter results by input
    for (let i = 0; i < anchorTags.length; i++) {
      let textValue = anchorTags[i].textContent || anchorTags[i].innerText;
      if (textValue.toUpperCase().indexOf(input) > -1) {
        anchorTags[i].style.display = '';
      } else {
        anchorTags[i].style.display = 'none';
      }
    }
    // If no input, hide dropdown
    if (props.value === '') {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  }

  return (
    <div>
      <form onSubmit={props.onSubmit} autoComplete="off">
        <input
          className="search-bar-scratch"
          id="input-scratch"
          type="text"
          placeholder="Choose an Industry"
          value={props.value}
          onChange={props.onInput}
          onKeyUp={filterFunction}
          onClick={() => {
            filterFunction();
            setShowDropdown(true);
          }}
          onBlur={() => {
            setShowDropdown(false);
          }}
        />
      </form>
      <div
        className={`dropdown-scratch ${
          showDropdown ? '' : 'dropdown-scratch-hide'
        }`}
        id="dropdown-scratch"
      >
        <ul className="ul-scratch">
          {props.db.industries.map((industry, index) => (
            <li key={index} className="li-scratch">
              <a
                className="a-scratch"
                href="#"
                onMouseDown={() => {
                  props.onClick(industry);
                  setShowDropdown(false);
                }}
              >
                {industry}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
