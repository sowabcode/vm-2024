import PropTypes from "prop-types";

const PrintBtn = ({ text, icon }) => {
  return (
    <button
      className={`flex items-center gap-2 border border-[#149cbd] font-semibold rounded-md hover:bg-[#149cbd] hover:text-white text-[#149cbd]  py-1 px-2 ${
        text === "Imprimer une carte"
          ? "bg-[#149cbd] text-white hover:bg-[#4e9bae]"
          : ""
      } ${
        text === "Imprimer une fiche"
          ? "hover:bg-white hover:text-[#4e9bae]"
          : ""
      }`}
    >
      <span>{text}</span>
      {icon}
    </button>
  );
};

PrintBtn.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

export default PrintBtn;
