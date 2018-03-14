import React from 'react';

const ValidationErrors = ({ errors }) => ((
  <div>
    {errors && errors.map((error, index) => (
      <span key={index}>
        <small style={{ color: "#E27C3E" }}>{error}</small> <br />
      </span>
    ))}
  </div>
));

export default ValidationErrors;
