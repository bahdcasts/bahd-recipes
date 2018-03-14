import React from 'react';

const RenderArrayInput = ({ elements, handleElementChange, isProcedure = false, validateInput }) => ((
  <ul className="list-group">
    {elements.map((element, index) => (
      <li className="list-group-item" key={index}>
        {
          !isProcedure &&
          <input type="text"
            value={element}
            className="form-control"
            placeholder="50 Naira Garri"
            onChange={event => handleElementChange(event, index)}
          />
        }
        {
          isProcedure &&

          <div className="row">
            <div className="col-1 h3">
              <span className="badge badge-primary">{index + 1}</span>
            </div>
            <div className="col-11">
              <input type="text"
                value={element}
                className="form-control"
                placeholder="50 Naira Garri"
                onChange={event => handleElementChange(event, index)}
              />
            </div>
          </div>
        }
      </li>
    ))}
  </ul>
))

export default RenderArrayInput;

