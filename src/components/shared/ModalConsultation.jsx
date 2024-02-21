import PropTypes from "prop-types";

import { Fragment, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { MdModeEditOutline } from "react-icons/md";
import { FaAngleUp } from "react-icons/fa6";
// import { FaAngleDown } from "react-icons/fa6";

const ModalConsultation = ({ open, setOpen, status }) => {
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    console.log(status);
  }, []);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-[screen] overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative w-[1300px] h-[600px] transform overflow-y-auto rounded-lg border ${
                  status === "enCours"
                    ? "border-red-500 bg-red-100"
                    : "border-green-500 bg-green-100"
                } text-left shadow-xl transition-all sm:my-8 max-sm:w-full max-sm:max-w-lg p-4`}
              >
                <div className="">
                  <div className="flex items-center justify-between mb-4">
                    <button className="flex items-center gap-2 bg-[#149cbd] text-white font-semibold py-2 px-4 rounded-md">
                      <span>Modifier cette fiche</span>
                      <MdModeEditOutline size={20} />
                    </button>

                    <span
                      onClick={() => setOpen(false)}
                      className="font-semibold text-red-300 hover:text-red-400 cursor-pointer"
                    >
                      Fermer
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-10 bg-white rounded-md p-4 mb-4">
                    <div className="space-y-1">
                      <h1 className="font-semibold">Dr Alpha Mamadou Diallo</h1>
                      <p className="text-gray-500 font-semibold">
                        Chef de service Diabétologie
                      </p>
                      <p className="text-gray-500 font-semibold uppercase">
                        Hopital Régionale de LABE
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold">Le 16/10/2023 à 12:57:32</p>
                      <p>
                        <span className="font-semibold">Status: </span>{" "}
                        <span className="font-semibold text-gray-500">
                          En attente des résultats de laboratoire
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img
                        src="https://placehold.co/400"
                        className="w-16 h-16 rounded-md"
                        alt=""
                      />
                      <div className="space-y-1">
                        <h1 className="font-semibold">Mamadou Alpha Diallo</h1>
                        <p className="text-gray-500 font-semibold">34 ans</p>
                        <p className="text-gray-500 font-semibold">
                          666 00 01 02
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <div className="bg-white rounded-md p-4 mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <h1 className="font-semibold">Plaintes du patient</h1>
                          <FaAngleUp size={20} />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus, molestias, animi quia, mollitia ea
                          totam a nihil quo fuga nesciunt voluptatum sint. Ipsa
                          illum at dolores laboriosam blanditiis id atque.
                        </p>
                      </div>
                      <div className="bg-white rounded-md p-4 mb-4">
                        <div className="flex items-center justify-between mb-4">
                          <h1 className="font-semibold">
                            Histoire de la maladie
                          </h1>
                          <FaAngleUp size={20} />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus, molestias, animi quia, mollitia ea
                          totam a nihil quo fuga nesciunt voluptatum sint. Ipsa
                          illum at dolores laboriosam blanditiis id atque.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="bg-white rounded-md p-4 mb-4">
                          <div className="flex items-center justify-between mb-4">
                            <h1 className="font-semibold">
                              Paramètres du Patient
                            </h1>
                            <FaAngleUp size={20} />
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus, molestias, animi quia, mollitia ea
                            totam a nihil quo fuga nesciunt voluptatum sint.
                            Ipsa illum at dolores laboriosam blanditiis id
                            atque.
                          </p>
                        </div>
                        <div className="bg-white rounded-md p-4 mb-4">
                          <div className="flex items-center justify-between mb-4">
                            <h1 className="font-semibold">Antécedents</h1>
                            <FaAngleUp size={20} />
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus, molestias, animi quia, mollitia ea
                            totam a nihil quo fuga nesciunt voluptatum sint.
                            Ipsa illum at dolores laboriosam blanditiis id
                            atque.
                          </p>
                        </div>
                        <div className="bg-white rounded-md p-4 mb-4">
                          <div className="flex items-center justify-between mb-4">
                            <h1 className="font-semibold">Examens physiques</h1>
                            <FaAngleUp size={20} />
                          </div>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Deactivate account
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

ModalConsultation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

export default ModalConsultation;
