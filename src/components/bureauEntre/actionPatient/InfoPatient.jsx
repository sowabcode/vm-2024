import { useContext, useEffect, useState } from "react";
import CardConsultation from "../../espacePatient/CardConsultation";

import { BiPlus } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import PatientContext from "../../../context/PatientContext";
import BeContext from "../../../context/BeContext";

const villes = ["N'zérékoré", "Macenta", "Lola", "Yomou", "Beyla", "Guéckédou"];

const InfoPatient = () => {
  const [showCard, setShowCard] = useState(true);

  const partners = JSON.parse(localStorage.getItem("partners"));

  const {
    patient,
    setPatient,
    profile,
    setProfile,
    profileServer,
    setProfileServer,
    savePatient,
    updadtePatient,
    response,
  } = useContext(PatientContext);

  const { actionProperties } = useContext(BeContext);

  const [userInfo, setUserInfo] = useState(null);
  // const [patientt, setPatientt] = useState(null);

  const [birthdate, setBirthdate] = useState("");
  const [typePatient, setTypePatient] = useState("");

  const [fieldError, setFildError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  const [gender, setGender] = useState("Homme");

  const [update, setUpdate] = useState(false);

  // Ce state Permet de vérifier s'il y a un patient à mettre à jour
  useEffect(() => {
    if (actionProperties.search) {
      setGender(patient.gender);
      setUpdate(true);
    }
  }, [actionProperties.search, setPatient, patient]);

  useEffect(() => {
    if (patient.birthdate === "") {
      setBirthdate("");
    } else if (patient.birthdate === "0.1") {
      const currentDate = new Date();
      const enfan1mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 1,
        currentDate.getDate()
      );
      setBirthdate(enfan1mois);
    } else if (patient.birthdate === "0.2") {
      const currentDate = new Date();
      const enfan2mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 2,
        currentDate.getDate()
      );
      setBirthdate(enfan2mois);
    } else if (patient.birthdate === "0.3") {
      const currentDate = new Date();
      const enfan3mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 3,
        currentDate.getDate()
      );
      setBirthdate(enfan3mois);
    } else if (patient.birthdate === "0.4") {
      const currentDate = new Date();
      const enfan4mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 4,
        currentDate.getDate()
      );
      setBirthdate(enfan4mois);
    } else if (patient.birthdate === "0.5") {
      const currentDate = new Date();
      const enfan5mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 5,
        currentDate.getDate()
      );
      setBirthdate(enfan5mois);
    } else if (patient.birthdate === "0.6") {
      const currentDate = new Date();
      const enfan6mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 6,
        currentDate.getDate()
      );
      setBirthdate(enfan6mois);
    } else if (patient.birthdate === "0.7") {
      const currentDate = new Date();
      const enfan7mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 7,
        currentDate.getDate()
      );
      setBirthdate(enfan7mois);
    } else if (patient.birthdate === "0.8") {
      const currentDate = new Date();
      const enfan8mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 8,
        currentDate.getDate()
      );
      setBirthdate(enfan8mois);
    } else if (patient.birthdate === "0.9") {
      const currentDate = new Date();
      const enfan9mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 9,
        currentDate.getDate()
      );
      setBirthdate(enfan9mois);
    } else if (patient.birthdate === "0.10") {
      const currentDate = new Date();
      const enfan10mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 10,
        currentDate.getDate()
      );
      setBirthdate(enfan10mois);
    } else if (patient.birthdate === "0.11") {
      const currentDate = new Date();
      const enfan11mois = new Date(
        currentDate.getFullYear() - 0,
        currentDate.getMonth() - 11,
        currentDate.getDate()
      );
      setBirthdate(enfan11mois);
    } else {
      const currentDate = new Date();
      const dob = new Date(
        currentDate.getFullYear() - parseInt(patient.birthdate),
        currentDate.getMonth(),
        currentDate.getDate()
      );

      setBirthdate(dob);
    }
  }, [patient.birthdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // setPatient({ ...patient, [name]: value });
    setPatient({
      ...patient,
      [name]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  };

  const handleProfileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setProfileServer(selectedFile);
      setProfile(objectUrl);
    }
  };

  const AddPatient = () => {
    if (
      patient.last_name.trim().length >= 2 &&
      patient.first_name.trim().length >= 3 &&
      patient.birthdate.trim() !== "" &&
      patient.phone.trim().length >= 9 &&
      patient.profession.trim().length > 2 &&
      patient.address.trim().length > 0 &&
      gender.trim() !== "" &&
      patient.city.trim() !== "" &&
      typePatient.trim() !== "" &&
      profile !== null
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("first_name", patient.first_name);
      formData.append("last_name", patient.last_name);
      formData.append("birthdate", birthdate);
      formData.append("gender", gender);
      formData.append("phone", patient.phone);
      formData.append("profession", patient.profession);
      formData.append("city", patient.city);
      formData.append("address", patient.address);
      formData.append("partenaire", typePatient);
      formData.append("accessToken", userInfo.token);
      formData.append("staff", userInfo.users.staff._id);
      formData.append("profile", profileServer);
      // for (var fd of formData.entries()) {
      //   console.log(fd);
      // }
      savePatient(formData);
    } else {
      setFildError("Error, tous les champs sont obligatoires !");
      setTimeout(() => {
        setFildError("");
      }, 5000);
    }
  };

  const handleUpdatePatient = () => {
    if (
      patient.last_name.trim().length >= 2 &&
      patient.first_name.trim().length >= 3 &&
      patient.birthdate.trim() !== "" &&
      patient.phone.trim().length >= 9 &&
      patient.profession.trim().length > 2 &&
      patient.address.trim().length > 0 &&
      gender.trim() !== "" &&
      patient.city.trim() !== "" &&
      typePatient.trim() !== "" &&
      profile !== null
    ) {
      setLoading(true);
      const formData = new FormData();
      formData.append("last_name", patient.last_name);
      formData.append("first_name", patient.first_name);
      formData.append("birthdate", birthdate);
      formData.append("gender", gender);
      formData.append("phone", patient.phone);
      formData.append("profession", patient.profession);
      formData.append("city", patient.city);
      formData.append("address", patient.address);
      formData.append("partenaire", typePatient);
      formData.append("accessToken", userInfo.token);
      formData.append("staff", userInfo.users.staff._id);
      formData.append("profile", profileServer);
      // for (var fd of formData.entries()) {
      //   console.log(fd);
      // }
      updadtePatient(formData, patient._id);
    } else {
      setFildError("Error, tous les champs sont obligatoires !");
      setTimeout(() => {
        setFildError("");
      }, 5000);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, [response]);

  return (
    <>
      <h1 className="font-semibold text-xl mb-5">Ajouter un patient</h1>
      <CardConsultation
        title="Informations du patient"
        showCard={showCard}
        setShowCard={() => setShowCard(!showCard)}
      >
        <div className="relative">
          {loading && (
            <div className="absolute w-full h-full z-20 bg-gray-200 opacity-60 rounded cursor-wait"></div>
          )}

          <div className="w-full">
            {fieldError !== "" && (
              <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
                {fieldError}
              </p>
            )}
            {response.type === "ok" && (
              <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-green-100 text-green-500">
                {response.msg}
              </p>
            )}
            {response.type === "error" && (
              <p className="w-full text-center font-medium text-sm my-3 py-3 rounded bg-red-100 text-red-500">
                {response.msg}
              </p>
            )}

            <div className="grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <input
                  type="text"
                  name="first_name"
                  value={patient.first_name}
                  onChange={handleChange}
                  placeholder="Nom"
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="last_name"
                  value={patient.last_name}
                  onChange={handleChange}
                  placeholder="Prénom"
                  className="w-full border rounded-md p-2"
                />
                <input
                  type="text"
                  name="birthdate"
                  value={patient.birthdate}
                  onChange={handleChange}
                  placeholder="Age"
                  className="w-full border rounded-md p-2"
                />
                <div className="flex items-center gap-10 p-2 max-lg:flex-col max-lg:gap-0 max-lg:items-start max-lg:p-0">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="homme"
                      value={gender}
                      checked={gender === "Homme"}
                      onChange={() => setGender("Homme")}
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:checked:bg-blue-500 dark:checked:border-blue-500"
                      id="sexe-1"
                    />
                    <label
                      htmlFor="sexe-1"
                      className="text-gray-500 ml-2 dark:text-gray-400"
                    >
                      Homme
                    </label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="femme"
                      value={gender}
                      checked={gender === "Femme"}
                      onChange={() => setGender("Femme")}
                      className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 "
                      id="sexe-2"
                    />
                    <label
                      htmlFor="sexe-2"
                      className="text-gray-500 ml-2 dark:text-gray-400"
                    >
                      Femme
                    </label>
                  </div>
                </div>
                <input
                  type="text"
                  name="phone"
                  value={patient.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  className="w-full border rounded-md p-2"
                />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  name="profession"
                  value={patient.profession}
                  onChange={handleChange}
                  placeholder="Profession"
                  className="w-full border rounded-md p-2"
                />
                <select
                  // value={"default"}
                  name="city"
                  onChange={handleChange}
                  className="w-full border rounded-md p-2.5"
                >
                  <option value="default">Selection la ville</option>
                  {villes.map((ville, index) => (
                    <option
                      key={index}
                      value={ville}
                      className="text-xs font-medium"
                    >
                      {ville}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="address"
                  value={patient.address}
                  onChange={handleChange}
                  placeholder="Adresse/Quartier"
                  className="w-full border rounded-md p-2"
                />
                <select
                  // value={typePatient}
                  onChange={(e) => setTypePatient(e.target.value)}
                  className="w-full border rounded-md p-2.5"
                >
                  <option selected>Type de patient</option>
                  {partners.map((partner) => (
                    <option
                      key={partner._id}
                      value={partner._id}
                      className="text-xs font-medium"
                    >
                      {partner.name}
                    </option>
                  ))}
                </select>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    // onChange={(e) => setProfile(e.target.files[0])}
                    onChange={handleProfileChange}
                    className="block w-full text-sm text-[#149cbd] file:bg-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-[#149cbd] file:text-sm file:font-semibold file:text-[#149cbd] hover:file:bg-[#b3e3ef]"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mt-5">
            {update ? (
              <button
                onClick={handleUpdatePatient}
                className="flex items-center gap-2 border bg-[#149cbd] font-semibold text-white rounded-md py-2 px-4"
              >
                <span>Modifier</span>
                <RxUpdate size={20} />
              </button>
            ) : (
              <button
                onClick={AddPatient}
                className="flex items-center gap-2 border bg-[#149cbd] font-semibold text-white rounded-md py-2 px-4"
              >
                <span>Ajouter</span>
                <BiPlus size={24} />
              </button>
            )}
          </div>
        </div>
      </CardConsultation>
    </>
  );
};

export default InfoPatient;
