import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("");
  const baseUrl = "http://localhost:8080/";

  useEffect(() => {
    const start = async () => {
      const link = await axios.get(`${baseUrl}` + "home");
      setUrl(link.data.url);
    };
    start();
  }, []);

  const handleHome = async () => {
    const link = await axios.get(`${baseUrl}` + "home");
    setUrl(link.data.url);
  };
  const handleApp = async () => {
    const link = await axios.get(`${baseUrl}` + "app");
    setUrl(link.data.url);
  };
  const handleAbout = async () => {
    const link = await axios.get(`${baseUrl}` + "about");
    setUrl(link.data.url);
  };
  const handleContact = async () => {
    const link = await axios.get(`${baseUrl}` + "contact");
    setUrl(link.data.url);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1>HMIS</h1>
          <div>
            <button onClick={handleHome}>Home</button>
          </div>
          <div>
            <button onClick={handleApp}>App</button>
          </div>
          <div>
            <button onClick={handleAbout}>About us</button>
          </div>
          <button onClick={handleContact}>Contact Us</button>
        </div>
        <div className="col-10">
          <iframe
            src={url}
            width="100%"
            height="630vh"
            style={{
              style: "border:1px solid black"
              // width: "100%",
              // height: "300",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
