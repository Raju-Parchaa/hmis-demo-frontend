import { useState } from "react";
import RegisterForm from "./RegisterForm";
import axios from "axios";

function Reception(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [address, setAddress] = useState("");

  const [pincode, setPincode] = useState("");

  const [state, setState] = useState("");

  const [dob, setDob] = useState("");

  const [huid, setHuid] = useState("");
  const [age, setAge] = useState("");

  const [patientId, setPatientId] = useState("");

  const [sendLink, setSendLink] = useState(false);

  const [newPatient, setNewPatient] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://app.parchaa.com/version-abdm/api/1.1/wf/HMIS-register-user",
        {
          name: name,
          gender: gender,
          phone: mobile,
          email: email,
          HUID: huid,
          PatientId: patientId
        }
      )
      .then((res) => {
        setNewPatient({
          name: name,
          id: patientId,
          complaint: "Cough",
          age: age,
          medications: "none",
          mobile: mobile
        });

        props.setPatients([...props.patients, newPatient]);

        setSendLink(true);

        setName("");
        setGender("");
        setMobile("");
        setEmail("");
        setAddress("");
        setPincode("");
        setState("");
        setDob("");
        setHuid("");
        setPatientId("");
        setAge("");
        console.log(res.data);
      });
  };

  return (
    <div>
      <h1>Reception</h1>
      <RegisterForm
        handleSubmit={handleSubmit}
        name={name}
        gender={gender}
        mobile={mobile}
        email={email}
        address={address}
        pincode={pincode}
        state={state}
        dob={dob}
        huid={huid}
        patientId={patientId}
        age={age}
        setName={(e) => setName(e.target.value)}
        setGender={(e) => setGender(e.target.value)}
        setMobile={(e) => setMobile(e.target.value)}
        setEmail={(e) => setEmail(e.target.value)}
        setAddress={(e) => setAddress(e.target.value)}
        setPincode={(e) => setPincode(e.target.value)}
        setState={(e) => setState(e.target.value)}
        setDob={(e) => setDob(e.target.value)}
        setHuid={(e) => setHuid(e.target.value)}
        setPatientId={(e) => setPatientId(e.target.value)}
        setAge={(e) => setAge(e.target.value)}
      />
      {sendLink ? (
        <button
          onClick={() => {
            console.log(newPatient);
            axios
              .post(
                "https://app.parchaa.com/version-abdm/api/1.1/wf/HMIS-login-user-link",
                { phone: newPatient.mobile }
              )
              .then((res) => {
                setSendLink(false);
                console.log(res);
              });
          }}
        >
          Send checkin link to patient
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Reception;
