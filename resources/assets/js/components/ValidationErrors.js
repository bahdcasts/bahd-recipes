import React from 'react';

const ValidationErrors = ({ errors }) => ((
  <div>
    {errors.map(error => (
      <span key={error}>
        <small style={{ color: "#E27C3E" }}>{error}</small> <br />
      </span>
    ))}
  </div>
));

export default ValidationErrors;
