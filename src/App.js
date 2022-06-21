import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCode")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };

  
  return (
    <div className="App">
      <h1>Генератор QR кодов</h1>
      <div className="container">
        <input
          id="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ваш текст"
        />
        <br />
        <QRCodeCanvas id="qrCode" value={text} size={200} />
        <br />
        <button onClick={downloadQRCode}>download</button>
      </div>
    </div>
  );
}

export default App;
