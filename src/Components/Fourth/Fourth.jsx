import React from 'react';
import './Fourth.css';

const Fourth = () => {
  return (
    <div>
      <div className="image-cover">
        <div className="sub-image-cover">
          <img src="src/assets/HC.png" alt="" />
          <h1>1000+</h1>
          <hr className="image-cover-hr" />
          <h2>Happy<br />Customers</h2>
        </div>
        <div className="sub-image-cover">
          <img src="src/assets/TH.png" alt="" />
          <h1>2017</h1>
          <hr className="image-cover-hr" />
          <h2>Top<br />Hospitality</h2>
        </div>
        <div className="sub-image-cover">
          <img src="src/assets/IA.png" alt="" />
          <h1>1105</h1>
          <hr className="image-cover-hr" />
          <h2>Innovative<br />Approach</h2>
        </div>
        <div className="sub-image-cover">
          <img src="src/assets/LR.png" alt="" />
          <h1>500+</h1>
          <hr className="image-cover-hr" />
          <h2>Lung<br />Replacement</h2>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
