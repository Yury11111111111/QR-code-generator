import "./App.css";
import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
        <Form>
          <Form.Group
            className="input"
            controlId="formBasicEmail"
            value={text}
            onChange={(e) => setText(e.target.value)}
          >
            <Form.Control placeholder="ваш текст" />
          </Form.Group>
        </Form>
        <br />
        <QRCodeCanvas id="qrCode" value={text} size={200} />
        <br />
        <Button id="button" onClick={downloadQRCode}>download</Button>
      </div>
    </div>
  );
}

export default App;
