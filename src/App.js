import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Redirect } from "react-router6-redirect";
import { useEffect, useState } from "react";
import Doctor from "./Doctor";
import Reception from "./Reception";
import patients_data from "./patient_db.json";

function App() {
  const [patients, setPatients] = useState(patients_data);
  const [loggedInDoctor, setLoggedInDoctor] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log(patients);
  }, [patients]);

  return (
    <div>
      <Router>
        <div className="navbar navbar-expand-lg navbar-light bg-primary">
          <h1
            className="navbar-text col-8"
            style={{ paddingLeft: 10, color: "white", fontFamily: "serif" }}
          >
            Welcome to HMIS
          </h1>
          <span className="col-2">
            <Link to="/doctor">
              <button>Doctor</button>
            </Link>
          </span>
          <span className="col-2">
            <Link to="/reception">
              <button>Reception</button>
            </Link>
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
