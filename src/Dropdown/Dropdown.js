// importing react and useState hook
import React, { useState } from 'react';

// importing dropdown css
import './Dropdown.css'

// array for drowdown list
const initialState = ['Yes','Probably not']

function Dropdown() {

  // creating state for dropdown list and initialising its state with above initialState array
  const [dropdownList] = useState(initialState);

  return (
    // creating dropdown component
    <div class="dropdown">
      <h5>Should we use dropdown</h5>
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
    >
      Select
    </button>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {dropdownList.map((item,index)=>(
          <li key={index} className="dropdown-item">{item}</li>

        )
        )}
    </ul>
  </div>
  )
}

export default Dropdown
