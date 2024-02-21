// import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import { LoginProvider } from "./context/LoginContext";
import { BeProvider } from "./context/BeContext";
import { PatientProvider } from "./context/PatientContext";

import Login from "./pages/Login";
import EspaceMedecin from "./pages/EspaceMedecin";
import EspacePatient from "./pages/EspacePatient";
import MainApp from "./components/MainApp";
import Statistics from "./pages/Statistics";
import Registre from "./pages/Registre";
import Assistance from "./pages/Assistance";
import Configuration from "./pages/Configuration";
import PriseChargePatient from "./pages/PriseChargePatient";
import BureauEntre from "./pages/BureauEntre";
import Payements from "./pages/Payements";
import ManagePatientBe from "./pages/ManagePatientBe";
import UpdatePassword from "./pages/UpdatePassword";
import PrivateRoute2 from "./components/PrivateRoute2";
import Examen from "./pages/Examen";
import Ordonnance from "./pages/Ordonnance";
import ExamenLabo from "./pages/ExamenLabo";
import StatisticLabo from "./pages/StatisticLabo";
import ConfigLabo from "./pages/ConfigLabo";
import LaboAction from "./pages/LaboAction";
import Accueil from "./pages/Accueil";
import Creances from "./pages/Creances";
import Tarifications from "./pages/Tarifications";
import PrintConsultationFiche from "./pages/PrintConsultationFiche";

const App = () => {
  return (
    <HashRouter basename="/">
      <LoginProvider>
        <BeProvider>
          <PatientProvider>
            <Routes>
              <Route element={<MainApp />}>
                <Route path="/espace-medecin" element={<EspaceMedecin />} />
                <Route path="/espace-patient" element={<EspacePatient />} />
                <Route
                  path="/prise-en-charge-patient"
                  element={<PriseChargePatient />}
                />
                <Route path="/examen" element={<Examen />} />
                <Route path="/ordonnance" element={<Ordonnance />} />
                <Route path="/registre" element={<Registre />} />
                <Route path="/statistics" element={<Statistics />} />
                <Route path="/assistance" element={<Assistance />} />
                <Route path="/configuration" element={<Configuration />} />

                {/* LABORATOIRE */}
                <Route path="/examen-labo" element={<ExamenLabo />} />
                <Route path="/labo-action" element={<LaboAction />} />
                <Route path="/statistic-labo" element={<StatisticLabo />} />
                <Route path="/config-labo" element={<ConfigLabo />} />

                {/* Direction */}
                <Route path="/accueil" element={<Accueil />} />
                <Route path="/creances" element={<Creances />} />
                <Route path="/tarifications" element={<Tarifications />} />
              </Route>

              {/* Bureau d'entré */}
              <Route element={<PrivateRoute2 />}>
                <Route path="/bureau-dentre" element={<BureauEntre />} />
                <Route path="/gerer-un-patient" element={<ManagePatientBe />} />
                <Route
                  path="/print-consultation-fiche"
                  element={<PrintConsultationFiche />}
                />
                <Route path="/payements" element={<Payements />} />
              </Route>
              <Route
                exact
                path="/update-password"
                element={<UpdatePassword />}
              />
              <Route exact path="/" element={<Login />} />
            </Routes>
          </PatientProvider>
        </BeProvider>
      </LoginProvider>
    </HashRouter>
  );
};

export default App;
