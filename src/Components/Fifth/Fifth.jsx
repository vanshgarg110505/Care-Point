import React from 'react';
import './Fifth.css';

const Fifth = () => {
  return (
    <div>
      <div className="section-3">
        <div className="HWW">
          <h1>How we work</h1>
          <h2>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan-tium.Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</h2>
          <div className="HWW-img">
            <div>
              <img src="src/assets/HWW-1.png" alt="" />
              <h3>Lorem ipsum dolor sit amet, </h3>
              <h4>April 19, 2017 | Dr. Jon Doe</h4>
              <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-que
                laudantium.</h5>
            </div>
            <div className="HWW-img-2">
              <img src="src/assets/HWW-2.png" alt="" />
              <h3>Lorem ipsum dolor sit amet, </h3>
              <h4>April 19, 2017 | Dr. Jon Doe</h4>
              <h5>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolorem-que
                laudantium.</h5>
            </div>
          </div>
          <div className="button-div">
            <button>READ MORE</button>
          </div>
        </div>
        <div className="OC">
          <h1>Our Creative</h1>
          <h2>Sed ut perspiciatis unde omnis iste natus error sit vo-luptatem accusantium doloremque laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem</h2>
          <button className="btn-1"><img src="src/assets/circle-2.png" alt="" />Heart Treatment</button>
          <h2 style={{ marginBottom: '4vh' }}>Sed ut perspiciatis unde omnis iste natus error s.it vo-luptatem
            accusantium doloremque
            laudantium.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.</h2>
          <button className="btn-2"><img src="src/assets/circle-2.png" alt="" />Heart Treatment</button>
          <button className="btn-2"><img src="src/assets/circle-2.png" alt="" />Heart Treatment</button>
          <button className="btn-2"><img src="src/assets/circle-2.png" alt="" />Heart Treatment</button>
        </div>
      </div>
    </div>
  )
}

export default Fifth;
