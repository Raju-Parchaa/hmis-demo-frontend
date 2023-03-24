const RegisterForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            full name :{" "}
            <input
              type="text"
              value={props.name}
              name="name"
              onChange={props.setName}
            />
          </label>
        </div>
        <div>
          <label>
            gender :{" "}
            <input
              type="text"
              value={props.gender}
              name="password"
              onChange={props.setGender}
            />
          </label>
        </div>
        <div>
          <label>
            mobile :{" "}
            <input
              type="text"
              value={props.mobile}
              name="password"
              onChange={props.setMobile}
            />
          </label>
        </div>

        <div>
          <label>
            email :{" "}
            <input
              type="email"
              value={props.email}
              name="password"
              onChange={props.setEmail}
            />
          </label>
        </div>
        <div>
          <label>
            address :{" "}
            <input
              type="text"
              value={props.address}
              name="password"
              onChange={props.setAddress}
            />
          </label>
        </div>

        <div>
          <label>
            pincode :{" "}
            <input
              type="text"
              value={props.pincode}
              name="password"
              onChange={props.setPincode}
            />
          </label>
        </div>

        <div>
          <label>
            state :{" "}
            <input
              type="text"
              value={props.state}
              name="password"
              onChange={props.setState}
            />
          </label>
        </div>

        <div>
          <label>
            date of birth :{" "}
            <input
              type="text"
              value={props.dob}
              name="password"
              onChange={props.setDob}
            />
          </label>
        </div>
        <div>
          <label>
            age :{" "}
            <input
              type="text"
              value={props.age}
              name="password"
              onChange={props.setAge}
            />
          </label>
        </div>
        <div>
          <label>
            Aadhar Number :{" "}
            <input
              type="text"
              value={props.aadharNumber}
              name="password"
              onChange={props.setAadharNumber}
            />
          </label>
        </div>
        <div>
          <label>
            Abha Id :{" "}
            <input
              type="text"
              value={props.abhaId}
              name="password"
              onChange={props.setAbhaId}
            />
          </label>
        </div>
        <div>
          <label>
            HUID :{" "}
            <input
              type="text"
              value={props.huid}
              name="password"
              onChange={props.setHuid}
            />
          </label>
        </div>
        <div>
          <label>
            Patient ID :{" "}
            <input
              type="text"
              value={props.patientId}
              name="password"
              onChange={props.setPatientId}
            />
          </label>
        </div>
        <div>
          <label>
            Department ID :{" "}
            <input
              type="text"
              value={props.departmentId}
              name="password"
              onChange={props.setDepartmentId}
            />
          </label>
        </div>
        <div>
          <label>
            Chief Complaint :{" "}
            <input
              type="text"
              value={props.chiefComplaint}
              name="password"
              onChange={props.setChiefComplaint}
            />
          </label>
        </div>
        <button type="submit">Register Patient in Parchaa</button>
      </form>
    </div>
  );
};

export default RegisterForm;
