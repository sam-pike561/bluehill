import React, { useState } from 'react';

const About = ({ info }) => {
  const [page, setPage] = useState([0])

  return (
    <div className="container">
      <div className="ui form active">
        <div className="ui field">
          <label>Butcher info</label>
        </div>
      </div>
    </div>
  );
};

export default About;
