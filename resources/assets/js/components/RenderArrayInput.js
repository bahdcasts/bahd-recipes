import React from 'react';

const RenderArrayInput = ({ elements, handleElementChange }) => ((
  <ul className="list-group">
    {elements.map((element, index) => (
      <li className="list-group-item" key={index}>
        <input type="text"
          value={element}
          className="form-control"
          placeholder="50 Naira Garri"
          onChange={event => handleElementChange(event, index)}
        />
      </li>
    ))}
  </ul>
))

export default RenderArrayInput;

