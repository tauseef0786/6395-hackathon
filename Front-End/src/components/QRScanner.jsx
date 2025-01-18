
import React from "react";

const QRScanner = () => {
  return (
    <div>Welcome to QRcode</div>
  );
}
export default QRScanner;


// import { useEffect, useRef } from "react";
// import { BrowserQRCodeReader } from "@zxing/library";

// const QRScanner = ({ onScan }) => {
//   const videoRef = useRef(null);
//   const codeReader = useRef(null);

//   useEffect(() => {
//     codeReader.current = new BrowserQRCodeReader();
//     codeReader.current.decodeFromVideoDevice(
//       null,
//       videoRef.current,
//       (result, err) => {
//         if (result) {
//           onScan(result.text);
//         } else if (err) {
//           console.error(err);
//         }
//       }
//     );

//     return () => {
//       codeReader.current.reset();
//     };
//   }, [onScan]);

//   return <video ref={videoRef} style={{ width: "100%" }} />;
// };

// export default QRScanner;
