import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Redirect } from "react-router6-redirect";
import { useState } from "react";
import Doctor from "./Doctor";
import Reception from "./Reception";
import patients_data from "./patient_db.json";

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
          <Route path="/" element={<Redirect from="/" to="/reception" />} />
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
