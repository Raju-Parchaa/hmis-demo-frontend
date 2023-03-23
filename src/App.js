import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Doctor from "./Doctor";
import Reception from "./Reception";
import patients_data from "./patient_db.json";

function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/doctor">Hi</Link>
          </li>
          <li>
            <Link to="/reception">Hello</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function App() {
  const [patients, setPatients] = useState(patients_data);

  return (
    <div>
      <Router>
        <div className="navbar navbar-expand-lg navbar-light bg-primary">
          <h1
            className="navbar-text"
            style={{ paddingLeft: 10, color: "white", fontFamily: "serif" }}
          >
            Welcome to HMIS
          </h1>
          <span>
            <button>
              <Link to="/doctor">Doctor</Link>
            </button>
          </span>
          <span>
            <button>
              <Link to="/reception">Reception</Link>
            </button>
          </span>
        </div>
        <div></div>
        <Routes>
          {/* <Route path="/" element={<Redirect to="/hi" />} /> */}
          <Route path="/doctor" element={<Doctor patients={patients} />} />
          <Route
            path="/reception"
            element={
              <Reception
                patients={patients}
                setPatients={(val) => setPatients(val)}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
