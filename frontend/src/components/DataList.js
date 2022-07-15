import React from 'react';

export default function DataList(props) {
  return (
    <div>
      <label htmlFor="industries">Choose an industry:</label>
      <input
        list="industries"
        id="industries-choice"
        name="industries"
        className="search-bar"
      />
      <datalist id="industries">
        {props.db.industries.map((industry, index) => (
          <option key={index} value={industry} />
        ))}
      </datalist>
    </div>
  );
}
