import PropTypes from "prop-types";

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { IoClose } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";

const ModalAddReglement = ({ isOpen, handleClose }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={handleClose}
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

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
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
              <Dialog.Panel className="relative w-[400px] min-h-[200px] max-h-[500px] transform overflow-y-auto rounded-lg border bg-white text-left shadow-xl transition-all sm:my-8 max-sm:w-full max-sm:max-w-lg px-1 py-1">
                <div className="">
                  <div className="flex items-center justify-between mb-6">
                    <h1 className="font-[600] text-xl uppercase ml-2">
                      Ajout de Partenaire
                    </h1>
                    <IoClose
                      size={24}
                      ref={cancelButtonRef}
                      onClick={handleClose}
                      className="text-red-600 cursor-pointer"
                    />
                  </div>

                  <div className="mx-2 space-y-3">
                    <select
                      name=""
                      id=""
                      className="border py-2 px-2 w-full rounded"
                    >
                      <option value="">Selectionner le partenaire</option>
                      <option value="">Kouma Academy</option>
                      <option value="">CBG</option>
                    </select>
                    <input
                      type="text"
                      placeholder="Montant payé"
                      className="border py-1.5 px-2 w-full rounded"
                    />
                    <input
                      type="text"
                      placeholder="Numéro de réçu"
                      className="border py-1.5 px-2 w-full rounded"
                    />

                    <select
                      name=""
                      id=""
                      className="border py-2 px-2 w-full rounded"
                    >
                      <option value="">Mode de payment</option>
                      <option value="">Caisse</option>
                      <option value="">Orange Money</option>
                      <option value="">Banque</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-end gap-4 mt-8 mb-3 mr-2 ">
                    <button
                      ref={cancelButtonRef}
                      onClick={handleClose}
                      className="flex items-center gap-2 border-2  border-red-400 text-red-400 font-[600] py-1 px-3 rounded"
                    >
                      <IoClose size={24} className="text-red-400" />
                      <span>Annuler</span>
                    </button>
                    <button className="flex items-center gap-2 bg-[#149cbd] text-white font-[600] py-1.5 px-3 rounded">
                      <BiPlus size={24} />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

ModalAddReglement.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalAddReglement;
