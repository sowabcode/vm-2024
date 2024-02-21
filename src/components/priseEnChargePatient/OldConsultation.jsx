import ConsultHistory from "./ConsultHistory";

const OldConsultation = () => {
  return (
    <div className="mt-1">
      <ConsultHistory status={"enCours"} />
      <ConsultHistory status={"terminer"} />
    </div>
  );
};

export default OldConsultation;
