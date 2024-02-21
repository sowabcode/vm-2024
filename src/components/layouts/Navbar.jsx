import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IoBagAddSharp } from "react-icons/io5";
import { BiSolidBookAdd } from "react-icons/bi";
import { RiHomeOfficeFill } from "react-icons/ri";
import { GiMicroscope } from "react-icons/gi";
import { FaNotesMedical } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineBarChart } from "react-icons/md";

import { FaHeartPulse } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdInsertChart } from "react-icons/md";

const medecinNavigations = [
  {
    link: "/prise-en-charge-patient",
    name: "Consultation",
    icon: <BiSolidBookAdd size={24} />,
  },
  {
    link: "/examen",
    name: "Examen",
    icon: <GiMicroscope size={24} />,
  },
  {
    link: "/ordonnance",
    name: "Ordonnance",
    icon: <FaNotesMedical size={24} />,
  },
  {
    link: "/hospitalisation",
    name: "Hospitalisation",
    icon: <FaBed size={24} />,
  },
  {
    link: "/rendez-vous",
    name: "Rendez-vous",
    icon: <FaRegCalendarAlt size={24} />,
  },
  {
    link: "/monitorage",
    name: "Monitorage",
    icon: <MdOutlineBarChart size={24} />,
  },
];

const beNavigations = [
  {
    link: "/bureau-dentre",
    icon: <RiHomeOfficeFill size={24} />,
    name: "BE",
  },
];

const laboNavigations = [
  {
    link: "/examen-labo",
    icon: <FaHeartPulse size={24} />,
    name: "Examens",
  },
  {
    link: "/statistic-labo",
    icon: <MdInsertChart size={24} />,
    name: "Statistiques",
  },
  {
    link: "/config-labo",
    icon: <IoIosSettings size={24} />,
    name: "Configuration",
  },
];

const directionNivigations = [
  {
    link: "/accueil",
    icon: <FaHeartPulse size={24} />,
    name: "Accueil",
  },
  {
    link: "/patients",
    icon: <MdInsertChart size={24} />,
    name: "Patients",
  },
  {
    link: "/personnel",
    icon: <IoIosSettings size={24} />,
    name: "Personnel",
  },
  {
    link: "/services",
    icon: <FaHeartPulse size={24} />,
    name: "Services",
  },
  {
    link: "/creances",
    icon: <MdInsertChart size={24} />,
    name: "Creances",
  },
  {
    link: "/tarifications",
    icon: <MdInsertChart size={24} />,
    name: "Tarifications",
  },
  {
    link: "/recettes",
    icon: <IoIosSettings size={24} />,
    name: "Recettes",
  },
  {
    link: "/rectification",
    icon: <FaHeartPulse size={24} />,
    name: "Rectification",
  },
  {
    link: "/graphiques",
    icon: <MdInsertChart size={24} />,
    name: "Graphiques",
  },
  {
    link: "/rapports",
    icon: <IoIosSettings size={24} />,
    name: "Rapports",
  },
];

const Navbar = () => {
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  return (
    <nav className="mt-10 flex flex-col gap-4 ">
      {userInfo && userInfo.users.role === "Médecin" && (
        <>
          {/* <Link
            to="/espace-medecin"
            className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-2 ${
              location.pathname === "/espace-medecin"
                ? "bg-[#c2f3ff] text-[#149cbd]"
                : ""
            }`}
          >
            <IoBagAddSharp size={24} />
            <span>Espace Medecin</span>
          </Link> */}

          {/* {laboNavigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.link}
              className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-2 ${
                location.pathname === navigation.link
                  ? "bg-[#c2f3ff] text-[#149cbd]"
                  : ""
              }`}
            >
              {navigation.icon}
              <span>{navigation.name}</span>
            </Link>
          ))} */}

          {/* {medecinNavigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.link}
              className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-2 ${
                location.pathname === navigation.link
                  ? "bg-[#c2f3ff] text-[#149cbd]"
                  : ""
              }`}
            >
              {navigation.icon}
              <span>{navigation.name}</span>
            </Link>
          ))} */}

          {directionNivigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.link}
              className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-1 ${
                location.pathname === navigation.link
                  ? "bg-[#c2f3ff] text-[#149cbd]"
                  : ""
              }`}
            >
              {navigation.icon}
              <span>{navigation.name}</span>
            </Link>
          ))}
        </>
      )}

      {userInfo &&
        userInfo.users.role === "Perceptrice BE" &&
        beNavigations.map((navigation, index) => {
          return (
            <Link
              key={index}
              to={navigation.link}
              className={`flex items-center gap-4 font-semibold text-lg text-[#149cbd] hover:bg-[#c2f3ff] rounded-md px-2 py-2 ${
                location.pathname === navigation.link
                  ? "bg-[#c2f3ff] text-[#149cbd]"
                  : ""
              }`}
            >
              {navigation.icon}
              <span>{navigation.name}</span>
            </Link>
          );
        })}
    </nav>
  );
};

export default Navbar;
