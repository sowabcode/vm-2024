import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
// import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { FaCheck } from "react-icons/fa6";
import { HiChevronUpDown } from "react-icons/hi2";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

import CardConsultation from "../espacePatient/CardConsultation";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Devon Webb" },
  { id: 8, name: "Tom Cook" },
  { id: 9, name: "Tanya Fox" },
  { id: 10, name: "Hellen Schmidt" },
  { id: 11, name: "Arlene Mccoy" },
  { id: 12, name: "Devon Webb" },
  { id: 13, name: "Tom Cook" },
  { id: 14, name: "Tanya Fox" },
  { id: 15, name: "Hellen Schmidt" },
  { id: 16, name: "Devon Webb" },
  { id: 17, name: "Tom Cook" },
  { id: 18, name: "Tanya Fox" },
  { id: 19, name: "Hellen Schmidt" },
];

const NewOrdonnance = () => {
  const [showCard, setShowCard] = useState(true);

  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const [medicament, setMedicament] = useState([]);
  const [posologie, setPosologie] = useState(1);
  const [type, setType] = useState("Capsule");

  const handleClick = () => {
    const data = {
      produit: selected.name,
      posologie: posologie,
      type: type,
    };

    // Vérification en fonction de tous les champs
    const isDuplicate = medicament.some(
      (item) => item.produit === data.produit
      // item.posologie === data.posologie &&
      // item.type === data.type
    );

    if (!isDuplicate) {
      setMedicament([...medicament, data]);
    }
  };

  const handleDelete = (produit) => {
    // setMedicament(medicament.find((p) => p.produit == produit));
    setMedicament(medicament.filter((item) => item.produit !== produit));
  };

  return (
    <div className="mt-4">
      <CardConsultation
        title="Ordonnance"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        {/* <div className="fixed top-16 w-72"> */}
        <Combobox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-3 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(person) => person.name}
                onChange={(event) => setQuery(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {filteredPeople.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredPeople.map((person) => (
                    <Combobox.Option
                      key={person.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-[#149cbd] text-white" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-[#149cbd]"
                              }`}
                            >
                              <FaCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
        {/* </div> */}
        <div className="grid grid-cols-[80%_auto] gap-4 mt-5 border-b-2 pb-5">
          <div className="flex items-center gap-10">
            <div>
              <h1 className="font-medium">Posologie</h1>
              <div className="flex items-center gap-2 mt-2">
                <span
                  onClick={() => setPosologie(1)}
                  className={`grid place-items-center rounded-full px-2.5 py-1 cursor-pointer ${
                    posologie === 1 ? "bg-[#149cbd] text-white" : "bg-gray-200"
                  }`}
                >
                  1x
                </span>
                <span
                  onClick={() => setPosologie(2)}
                  className={`grid place-items-center rounded-full px-2.5 py-1 cursor-pointer ${
                    posologie === 2 ? "bg-[#149cbd] text-white" : "bg-gray-200"
                  }`}
                >
                  2x
                </span>
                <span
                  onClick={() => setPosologie(3)}
                  className={`grid place-items-center rounded-full px-2.5 py-1 cursor-pointer ${
                    posologie === 3 ? "bg-[#149cbd] text-white" : "bg-gray-200"
                  }`}
                >
                  3x
                </span>
              </div>
            </div>
            <div>
              <h1 className="font-medium">Type</h1>
              <div className="flex items-center gap-2 mt-2">
                <span
                  onClick={() => setType("Capsule")}
                  className={`py-1 px-2.5 rounded-full cursor-pointer ${
                    type === "Capsule"
                      ? "bg-[#149cbd] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Capsule
                </span>
                <span
                  onClick={() => setType("Sirop")}
                  className={`py-1 px-2.5 rounded-full cursor-pointer ${
                    type === "Sirop" ? "bg-[#149cbd] text-white" : "bg-gray-200"
                  }`}
                >
                  Sirop
                </span>
                <span
                  onClick={() => setType("Pomade")}
                  className={`py-1 px-2.5 rounded-full cursor-pointer ${
                    type === "Pomade"
                      ? "bg-[#149cbd] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  Pomade
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 bg-[#c2f3ff] text-[#149cbd] font-medium p-2 rounded"
            >
              <IoMdAdd size={20} /> <span>Ajouter</span>
            </button>
          </div>
        </div>
        <table width="100%">
          <thead>
            <tr className="border-b-2">
              <th align="left">Médicament</th>
              <th align="left">Type</th>
              <th align="center">Posoligie</th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {medicament.map((medi, index) => (
              <tr key={index}>
                <td align="left">{medi.produit}</td>
                <td align="legt">{medi.type}</td>
                <td align="center">{medi.posologie}/jr</td>
                <td align="center">
                  <MdDeleteForever
                    onClick={() => handleDelete(medi.produit)}
                    size={20}
                    color="red"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-center mt-5">
          <button
            type="submit"
            className="text-center font-medium bg-[#149cbd] text-white rounded px-10 py-2"
          >
            Valider
          </button>
        </div>
      </CardConsultation>
    </div>
  );
};

export default NewOrdonnance;
