import PropTypes from "prop-types";

import { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        // Complete step
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        // Pending Step
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center">
          <div
            className={`grid place-items-center rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-7 w-7 ${
              step.selected
                ? "bg-[#149cbd] text-white font-bold border-4 border-gray-300"
                : ""
            }`}
          >
            {step.selected ? (
              <span className="text-white font-bold text-xl">
                {/* &#10003; */}
              </span>
            ) : (
              <div className="w-5 h-5 bg-[#149cbd] rounded-full"></div>
            )}
          </div>

          <div
            className={`absolute top-0 text-center mt-10 w-32 text-xs font-medium uppercase ${
              step.highlighted ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {step.description}
          </div>
        </div>

        <div
          className={`flex-auto border-t-2 transition duration-500 ease-in-out ${
            step.completed ? "border-[#149cbd]" : "border-gray-300"
          }`}
        ></div>
      </div>
    );
  });

  return (
    <div className="mx-4 p-4 flex items-center justify-between">
      {displaySteps}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
