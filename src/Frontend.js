const handlePatientProfile = (id) => {
  window.open(
    `https://app.parchaa.com/version-abdm/hmis/patient-profile?HUID=rail123&patient-id=${id}`,
    "Popup Window",
    "width=600,height=600"
  );
};

export const FrontEnd = ({ doctor, patients }) => {
  const Patient = ({ patient }) => {
    return (
      <div>
        <h3>Patient Name - {patient.name}</h3>
        <ul>
          <li>Age - {patient.age}</li>
          <li>Chief Complaint - {patient.complaint}</li>
          <li>Medications - {patient.medications}</li>
        </ul>
        <button
          className="btn btn-success"
          onClick={() => handlePatientProfile(patient.id)}
        >
          View Profile
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Hello Dr.{doctor.name}</h1>
      <h3>Please find your appointments here</h3>
      <div className="container-fluid">
        {patients.map((patient) => (
          <Patient patient={patient} key={patient.id} />
        ))}
      </div>
      <div>
        <h3>Patient Name - rishabh</h3>
        <ul>
          <li>Age - 23</li>
          <li>Chief Complaint - Cough</li>
          <li>Medications - none</li>
        </ul>
        <button
          className="btn btn-success"
          onClick={() => handlePatientProfile(1234)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};
