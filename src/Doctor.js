import { useState } from "react";
import LoginForm from "./LoginForm";
import { FrontEnd } from "./Frontend";
import doctors from "./doctor_db.json";

function Doctor(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = doctors.find((doctor) => name === doctor.name);
    if (!doc) {
      console.log("No doc found");
      setPassword("");
      setName("");
      return;
    }
    if (doc.password === password) {
      props.setLoggedIn(true);
      props.setLoggedInDoctor(doc);
      setName("");
    } else {
      console.log("Wrong password");
    }
    setPassword("");
  };

  return (
    <div>
      {props.loggedIn ? (
        <FrontEnd doctor={props.loggedInDoctor} patients={props.patients} />
      ) : (
        <LoginForm
          handleSubmit={handleSubmit}
          name={name}
          password={password}
          setName={(e) => setName(e.target.value)}
          setPassword={(e) => setPassword(e.target.value)}
        />
      )}
    </div>
  );
}

export default Doctor;
