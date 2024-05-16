import React from 'react';
import './Second.css';

const Second = () => {
  return (
    <div className="sub-menu-2">
      <div className="menu-1" style={{ backgroundColor: '#43b1d2' }}>
        <div className="icon-2">
          <img src="src/assets/best-treatment.png" alt="Best Treatment" />
        </div>
        <div className="text-2">
          <h1>Best Treatment</h1>
          <h4 className="sub-text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium.</h4>
        </div>
      </div>
      <div className="menu-1" style={{ backgroundColor: '#3fb6c6' }}>
        <div className="icon-2">
          <img src="src/assets/emergency-help.png" alt="Emergency Help" />
        </div>
        <div className="text-2">
          <h1>Emergency Help</h1>
          <h4 className="sub-text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium.</h4>
        </div>
      </div>
      <div className="menu-1" style={{ backgroundColor: '#3cbbbb' }}>
        <div className="icon-2">
          <img src="src/assets/medical-staff.png" alt="Medical Staff" />
        </div>
        <div className="text-2">
          <h1>Medical Staff</h1>
          <h4 className="sub-text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium.</h4>
        </div>
      </div>
      <div className="menu-1" style={{ backgroundColor: '#37c3a8' }}>
        <div className="icon-2">
          <img src="src/assets/qualified-doctors.png" alt="Qualified Doctors" />
        </div>
        <div className="text-2">
          <h1>Qualified Doctors</h1>
          <h4 className="sub-text-2">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan-tium doloremque laudantium.</h4>
        </div>
      </div>
    </div>
  );
};

export default Second;
