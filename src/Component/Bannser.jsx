import React from 'react';

function Bannser() {
  return (
    <div>
      <div className='text-center bg-image' style={{ height: '350px' }}>
        <img src={require('../Styles/Images/Banner.jpg')} alt="Banner" style={{ height: '350px', width: '100%' }} />
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to FedEx</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ backgroundColor: '#46bd4c' }}>
        <div className="text-white">
          <h10 >Use FedEx One Rate® to ship with FedEx 2-day® for as low as $9.75!*</h10>
        </div>
      </div>
    </div>
  );
}

export default Bannser;