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
      <div className="container-fluid">
        {patients.map((patient) => (
          <Patient patient={patient} key={patient.id} />
        ))}
      </div>
    </div>
  );
};
