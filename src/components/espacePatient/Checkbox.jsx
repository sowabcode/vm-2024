import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

export default function Checkbox({ plainte }) {
  const [selected, setSelected] = useState(plainte[0]);

  return (
    <div className="py-4">
      <div className="">
        <RadioGroup value={selected} onChange={setSelected}>
          {/* <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label> */}
          <div className="flex items-center gap-4">
            {plainte.map((plan, index) => (
              <RadioGroup.Option
                key={index}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex items-center cursor-pointer px-3 py-1.5 shadow-md rounded-full focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between gap-4">
                      {checked ? (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      ) : (
                        <div className="shrink-0 text-white">
                          <Xmark className="h-6 w-6" />
                        </div>
                      )}

                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Xmark(props) {
  return (
    <svg
      viewBox="0 0 512 512"
      // fill="none"
      {...props}
    >
      <path
        stroke="red"
        // strokeWidth={1.5}
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
      />
    </svg>
  );
}
