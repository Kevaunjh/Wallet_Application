import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrImage from './../../images/rqcodetemplate.png';
import qrMini from './../../images/qr-code.png';

function MyQR() {
  const [isQRBlurred, setIsQRBlurred] = useState(true);
  const navigate = useNavigate();

  const handleToggleQRBlur = () => {
    setIsQRBlurred(!isQRBlurred);
  };

  const handleCancelOrFinish = () => {
    if (isQRBlurred) {
      navigate(-1);
    } else {
      navigate('/Main');
    }
  };

  return (
    <div className="bg-[#e9f7f2] min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-6 flex flex-col items-center text-center space-y-6">
        <img
          src={qrMini}
          alt="Mini QR Code"
          className="w-16 h-16"
        />
        <h2 className="text-xl font-semibold text-gray-800">My QR Code</h2>
        <img
          src={qrImage}
          alt="QR Code"
          className={`w-64 h-64 ${isQRBlurred ? 'filter blur-lg' : ''}`}
        />
        <h3 className="text-lg font-semibold text-gray-800">Scan QR Code</h3>
        <p className="text-gray-600">
          Hold your phone steady while your QR code is being scanned
        </p>
        <button
          onClick={handleToggleQRBlur}
          className="bg-[#467a4d] text-white px-6 py-3 rounded-lg hover:bg-[#37613e]"
        >
          Show my QR Code
        </button>
        <button
          onClick={handleCancelOrFinish}
          className="text-[#467a4d] mt-4"
        >
          {isQRBlurred ? 'Cancel' : 'Finish'}
        </button>
      </div>
    </div>
  );
}

export default MyQR;
