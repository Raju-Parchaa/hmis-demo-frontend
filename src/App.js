import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [url, setUrl] = useState("https://www.parchaa.com/");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) {
      const token = localStorage.getItem("token");
      if (token) {
        setUrl(
          `https://app.parchaa.com/version-raju-25-2/doctor_parchaa_index/9115096873/${token}`
        );
        setLoggedIn(true);
      }
    }
  }, []);

  useEffect(() => {
    console.log(url);
  }, [url]);

  const handleHome = () => {
    setUrl("https://www.parchaa.com/home");
  };
  const handleApp = () => {
    if (!loggedIn) {
      axios
        .post(
          "https://app.parchaa.com/version-raju-25-2/api/1.1/wf/login-from-frontend",
          { phone: "9115096873" },
          {
            headers: {
              Authorization: `Bearer 8468803d9cc6eb75be404d9884ca12fd`
            }
          }
        )
        .then((res) => {
          const token = res.data.response.code;
          localStorage.setItem("token", token);
          setUrl(
            `https://app.parchaa.com/version-raju-25-2/doctor_parchaa_index/9115096873/${token}`
          );
          setLoggedIn(true);
        });
    } else {
      setUrl("https://app.parchaa.com/version-raju-25-2/doctor_parchaa_index");
    }
  };
  const handleAbout = () => {
    setUrl("https://www.parchaa.com/about");
  };
  const handleContact = () => {
    setUrl("https://www.parchaa.com/contact");
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
            <button onClick={handleApp}>Log in</button>
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
