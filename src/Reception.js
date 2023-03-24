import { useEffect, useState } from "react";
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

  const [departmentId, setDepartmentId] = useState("");

  const [chiefComplaint, setChiefComplaint] = useState("");

  const [aadharNumber, setAadharNumber] = useState();

  const [abhaId, setAbhaId] = useState();

  useEffect(() => {
    console.log(props.patients);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/patient/create", {
        fullname: name,
        gender: gender,
        mobile: mobile,
        email: email,
        address: address,
        pincode: pincode,
        state: state,
        dateOfBirth: dob,
        HUID: huid,
        PatientId: patientId,
        aadharNumber: aadharNumber,
        abhaIds: [abhaId],
        departmentId: departmentId,
        chiefComplaint: chiefComplaint
      })
      .then((res) => {
        const newP = {
          name: name,
          id: patientId,
          complaint: chiefComplaint,
          age: age,
          mobile: mobile
        };

        setNewPatient(newP);

        props.setPatients([...props.patients, newP]);
        // console.log(name);
        // console.log(gender);
        // console.log(mobile);
        // console.log(email);
        // console.log(address);
        // console.log(pincode);
        // console.log(state);
        // console.log(dob);
        // console.log(huid);
        // console.log(patientId);
        // console.log(age);
        // console.log(departmentId);
        // console.log(chiefComplaint);
        // console.log(aadharNumber);
        // console.log(abhaId);

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
        setDepartmentId("");
        setChiefComplaint("");
        setAadharNumber("");
        setAbhaId("");
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
        departmentId={departmentId}
        chiefComplaint={chiefComplaint}
        aadharNumber={aadharNumber}
        abhaId={abhaId}
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
        setDepartmentId={(e) => setDepartmentId(e.target.value)}
        setChiefComplaint={(e) => setChiefComplaint(e.target.value)}
        setAadharNumber={(e) => setAadharNumber(e.target.value)}
        setAbhaId={(e) => setAbhaId(e.target.value)}
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
