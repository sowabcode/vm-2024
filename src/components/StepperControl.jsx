import PropTypes from "prop-types";

const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="w-full flex justify-between mt-8 mx-0">
      <button
        onClick={() => handleClick("back")}
        className={`bg-white text-slate-400 uppercase py-1 px-4 rounded-md font-semibold cursor-pointer border-2 border-slate-300 hover:border-slate-700 transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Précédent
      </button>

      <button
        onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-1 px-4 rounded-md font-semibold cursor-pointer hover:border-slate-700 transition duration-200 ease-in-out"
      >
        {currentStep === steps.length ? "Confirmer" : "Suivant"}
      </button>
    </div>
  );
};

StepperControl.propTypes = {
  handleClick: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  steps: PropTypes.array.isRequired,
};

export default StepperControl;
