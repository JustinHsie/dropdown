import React from 'react';
import './DataList.css';

export default function DataList(props) {
  return (
    <div>
      <label htmlFor="industries">Choose an Industry:</label>
      <input
        list="industries"
        id="industries-choice"
        name="industries"
        className="datalist-bar"
      />
      <datalist id="industries">
        {props.db.industries.map((industry, index) => (
          <option key={index} value={industry} />
        ))}
      </datalist>
    </div>
  );
}
