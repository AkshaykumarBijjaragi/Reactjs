import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRcodeGenerator() {
  const [inputValue, setInputValue] = useState("");
  const [QRValue, setQRValue] = useState("");

  function GenerateQR() {
    setQRValue(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter value to generate QR"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
        <button disabled={!Boolean(inputValue.trim())} onClick={GenerateQR}>
          Generate QR code
        </button>
      </div>

      <div style={{ background: "white", padding: "16px" }}>
        <QRCode value={QRValue} size={400} />
      </div>
    </div>
  );
}
