import React from 'react';
import './UIKitBar.css';

export default function UIKitBar(props) {

  // Filter function
  function filterFunction() {
    let input = props.value.toUpperCase();
    let dropdownDiv = document.getElementById('dropdown');
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
  }

  // Dropdown click to hide dropdown
  function handleAnchorClick() {
    let dropdownDiv = document.getElementById('dropdown');
    dropdownDiv.style.display = 'none';
  }

  // Input click to prevent hiding dropdown
  function handleInputClick() {
    let dropdownDiv = document.getElementById('dropdown');
    dropdownDiv.style.display = '';
  }

  return (
    <form
      className="uk-search uk-search-navbar search-bar"
      onSubmit={props.onSubmit}
    >
      <input
        className="uk-search-input search-input"
        type="text"
        placeholder="Choose an Industry"
        value={props.value}
        onChange={props.onInput}
        onKeyUp={filterFunction}
        onClick={handleInputClick}
      />
      <div
        uk-dropdown="mode: click; animation: reveal-top; animate-out: true; duration: 700"
        className="dropdown"
        id="dropdown"
        onClick={handleAnchorClick}
      >
        <ul className="uk-nav uk-dropdown-nav">
          {props.db.industries.map((industry, index) => (
            <li key={index}>
              <a className="anchor" href="#" onClick={() => props.onClick(industry)}>
                {industry}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}
