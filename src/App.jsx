import { useState } from "react";
import QRCode from "qrcode";
import "./App.css";
import { FaGithub } from "react-icons/fa";
import { IoIosCloudDownload } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";

function App() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const generateQRCode = async () => {
    try {
      const qr = await QRCode.toDataURL(url);
      setQrCodeUrl(qr);
    } catch (err) {
      alert("QR Code Generation Failed:", err);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = "qrCode.png";
    link.click();
  };

  return (
    <>
      <div className="border-b-2 border-gray-200 flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="font-sans text-xl font-light text-gray-800">
          qrforfree.
        </div>
        <div className="text-gray-700 text-2xl hover:text-black transition-colors duration-300 cursor-pointer">
          <FaGithub />
        </div>
      </div>

      <div className="mx-auto mr-8 ml-8 mt-10 p-6 bg-white rounded-3xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          QR Code Generator
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Paste your link below and get a QR instantly!
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter the link to be embedded..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

           <div className="flex justify-center">
          <button
            onClick={generateQRCode}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition duration-200 flex items-center gap-2"
          > 
          <IoMdSettings />
            Generate QR
          </button>
          </div>
          
        </div>

        {qrCodeUrl && (
          <div className="mt-8 text-center">
            <img
              src={qrCodeUrl}
              alt="Generated QR Code"
              className="mx-auto w-48 h-48 mb-4"
            />
            <div className="flex justify-center">
              <button
                onClick={downloadQRCode}
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition duration-200 flex items-center gap-2"
              >
                <IoIosCloudDownload className="text-xl" />
                Download QR
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
