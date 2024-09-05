import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qrMini from './../../images/qr-code.png'; 


const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

function ReadQR() {
  const [isQRBlurred, setIsQRBlurred] = useState(true);
  const [uploadedImage, setUploadedImage] = useState(null); 
  const navigate = useNavigate();

  const Moveon = () => {
      navigate("/DepositSuccessful") ;
    };

    const Moveback = () => {
        navigate("/Transfermoney") ;
      };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result); 
      };
      reader.readAsDataURL(file);
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
        {isMobile() ? (
          <div className="w-64 h-64 border-gray-400 rounded-lg">
            <input 
              type="file" 
              accept="image/*" 
              capture="environment" 
              className="w-full h-full opacity-0 absolute inset-0 " 
            />
            <div className="w-full h-full  flex items-center justify-center">
              <span className="text-gray-500">Capture your QR code</span>
            </div>
          </div>
        ) : (
          <div className="w-64 h-64 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
            {uploadedImage ? (
              <img 
                src={uploadedImage} 
                alt="Uploaded QR Code" 
                className="w-full h-full object-cover rounded-lg" 
              />
            ) : (
              <p className="text-gray-500">Your QR code will appear here</p>
            )}
          </div>
        )}

        {!isMobile() && (
          <div>
            <label 
              htmlFor="upload-input" 
              className="text-green-600 cursor-pointer hover:underline"
            >
              Upload your QR Photo
            </label>
            <input 
              id="upload-input" 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={handleImageUpload} 
            />
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-800">Scan QR Code</h3>

        <p className="text-gray-600">
          Hold your phone steady while your QR code is being scanned
        </p>
        <button 
          className="bg-[#467a4d] text-white px-6 py-3 rounded-lg hover:bg-[#37613e]"
          onClick={Moveon}
        >
          Finish
        </button>
        <button 
          className="text-[#467a4d]  px-6  rounded-lg"
          onClick={Moveback}
        >
          Back
        </button>

       
      </div>
    </div>
  );
}

export default ReadQR;
