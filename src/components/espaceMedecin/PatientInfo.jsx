const PatientInfo = () => {
  return (
    <div className="flex items-center flex-wrap gap-5 mt-4 divide-x divide-gray-200">
      <div className="flex items-center gap-4">
        <img
          src="https://placehold.co/400"
          className="w-12 h-12 rounded-full"
          alt=""
        />
        <div className="inline-grid">
          <strong>Mamadou Alpha Daillo</strong>
          <span>34 ans</span>
        </div>
      </div>
      <div className="inline-grid pl-4">
        <strong>O0531Aff01</strong>
        <span>Identifiant</span>
      </div>
      <div className="inline-grid pl-4">
        <strong>623 28 08 10</strong>
        <span>Téléphone</span>
      </div>
      <div className="inline-grid pl-4">
        <strong>13/10/2023</strong>
        <span>Date d&apos;enrollement</span>
      </div>
      <div className="inline-grid pl-4">
        <strong>Cultivateur</strong>
        <span>Profession</span>
      </div>
      <div className="inline-grid pl-4">
        <strong>Kindia</strong>
        <span>Adresse</span>
      </div>
    </div>
  );
};

export default PatientInfo;
