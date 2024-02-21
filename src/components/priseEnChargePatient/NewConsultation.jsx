import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { StepContext } from "../../context/StepContext";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
import Plaintes from "../consultationStepper/Plaintes";
import Parametres from "../consultationStepper/Parametres";
import ExamenPhysicDiagnostic from "../consultationStepper/ExamenPhysicDiagnostic";
import Finalisation from "../consultationStepper/Finalisation";

const NewConsultation = () => {
  // Gestion des Etapes
  const [currentStep, setCurrentStep] = useState(1);
  const steps = [
    "Plaintes",
    "Paramètres",
    "Examens physiques & Diagnostique",
    "Finalisation",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Plaintes />;
      case 2:
        return <Parametres />;
      case 3:
        return <ExamenPhysicDiagnostic />;
      case 4:
        return <Finalisation />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  // Gestion Des Plaintes Du Patient
  const [choixPlaintes, setChoixPlantes] = useState([]);

  const handlePlaintesChange = (plainte) => {
    if (!choixPlaintes.includes(plainte)) {
      setChoixPlantes([...choixPlaintes, plainte]);
    } else {
      setChoixPlantes(choixPlaintes.filter((item) => item != plainte));
    }
  };

  const [autrePlainte, setAutrePlainte] = useState({
    autrePlainte: "",
    evolution: "",
  });

  const handleAutrePlainteChange = (e) => {
    const { name, value } = e.target;
    setAutrePlainte({ ...autrePlainte, [name]: value });
  };

  // Gestion Des Parametres Du Patient
  const [parametres, setParametres] = useState({
    tensionArt: "",
    poids: "",
    frequenceResp: "",
    pouls: "",
    scoreGlasgow: "",
    temperature: "",
    taille: "",
    rythmeCardiaq: "",
    sapo2: "",
    autresParametres: "",
  });

  const handleParameterChange = (e) => {
    const { name, value } = e.target;
    setParametres({ ...parametres, [name]: value });
  };

  // Gestion des Examens Physiques & Diagnostiques
  const [examenPhysic, setExamenPhysic] = useState("");

  // Diagnostique
  const [diagnostics, setDiagnostics] = useState([]);
  const [diagnosticLabel, setDiagnosticLabel] = useState({
    maladie: "",
    comment: "",
  });

  const handleChangeDiagnostics = (e) => {
    const { name, value } = e.target;
    setDiagnosticLabel({ ...diagnosticLabel, [name]: value });
  };

  const handleAddDiagnostic = (e) => {
    e.preventDefault();

    const newDiagnostic = {
      id: uuidv4().toString(),
      maladie: diagnosticLabel.maladie,
      comment: diagnosticLabel.comment,
    };
    setDiagnostics([...diagnostics, newDiagnostic]);
    setDiagnosticLabel({ maladie: "", comment: "" });
  };

  const handleDeleteDiagnostic = (id) => {
    setDiagnostics(diagnostics.filter((item) => item.id !== id));
  };

  // ETAT DU PATIENT A LA SORTIE
  const [etatPatientSortie, setEtatPatientSortie] = useState([]);

  const handleEtatPatient = (plainte) => {
    if (!etatPatientSortie.includes(plainte)) {
      setEtatPatientSortie([...etatPatientSortie, plainte]);
    } else {
      setEtatPatientSortie(etatPatientSortie.filter((item) => item != plainte));
    }
  };

  // PROCHAIN RENDEZ-VOUS
  const [rendezVous, setRendezVous] = useState("");

  const handleRendezVousChange = (e) => {
    setRendezVous(e.target.value);
  };

  // LIMITE =============================================== LIMITE \\

  // HISTOIRE DE LA MALADIE ET ANTECEDENTS
  const [histories, setHistories] = useState({
    histoireMaladie: "",
    autresAntecedents: "",
  });

  const handleHistoriesChange = (e) => {
    const { name, value } = e.target;
    setHistories({ ...histories, [name]: value });
  };

  // ANTECEDENTS DE LA MALADIE
  const [choixAntecedents, setChoixAntecedents] = useState([]);

  const handleAntecedentsChange = (plainte) => {
    if (!choixAntecedents.includes(plainte)) {
      setChoixAntecedents([...choixAntecedents, plainte]);
    } else {
      setChoixAntecedents(choixAntecedents.filter((item) => item != plainte));
    }
  };

  // EXAMENS PHYSIQUE
  const [examenPhysics, setExamenPhysics] = useState({
    inspection: "",
    appareilDigestif: "",
    appareilRespiratoire: "",
    cardioVasculaire: "",
    statusNerologic: "",
  });

  const handleExamenPhysicsChange = (e) => {
    const { name, value } = e.target;
    setExamenPhysics({ ...examenPhysics, [name]: value });
  };

  // TRAITEMENT SYMPTOMATIQUE
  const [traitementSympto, setTraitementSympto] = useState("");

  const handleTraitementSympto = (e) => {
    setTraitementSympto(e.target.value);
  };

  // BILAN COMPLEMENTAIRE
  const [bilanComplement, setBilanComplement] = useState([]);

  const handleBilanComplement = (plainte) => {
    if (!choixAntecedents.includes(plainte)) {
      setBilanComplement([...bilanComplement, plainte]);
    } else {
      setBilanComplement(bilanComplement.filter((item) => item != plainte));
    }
  };

  // DIAGNOSTIQUE DE DEFINITIF
  const [diagnosticDefinitif, setDiagnosticDefinitif] = useState([]);
  const [diagnosticDef, setDiagnosticDef] = useState({
    maladie: "",
    comment: "",
  });

  const handleChangeDiagnosticDef = (e) => {
    const { name, value } = e.target;
    setDiagnosticDef({ ...diagnosticDef, [name]: value });
  };

  const handleAddDiagnosticDef = (e) => {
    e.preventDefault();

    const newDiagnostic = {
      id: uuidv4().toString(),
      maladie: diagnosticDef.maladie,
      comment: diagnosticDef.comment,
    };
    setDiagnosticDefinitif([...diagnosticDefinitif, newDiagnostic]);
    setDiagnosticDef({ maladie: "", comment: "" });
  };

  const handleDeleteDiagnosticDef = (id) => {
    setDiagnosticDefinitif(
      diagnosticDefinitif.filter((item) => item.id !== id)
    );
  };

  // TRAITEMENT ETIOLOGIQUE
  const [traitementEtiologic, setTraitementEtiologic] = useState("");

  const handleTraitementEtiologic = (e) => {
    setTraitementEtiologic(e.target.value);
  };
  return (
    <div className="mt-1">
      <div>
        <Stepper steps={steps} currentStep={currentStep} />
      </div>

      <div className="my-14">
        <div className="mb-5">
          <StepContext.Provider
            value={{
              choixPlaintes,
              handlePlaintesChange,
              autrePlainte,
              handleAutrePlainteChange,
              parametres,
              handleParameterChange,
              examenPhysic,
              setExamenPhysic,
              histories,
              handleHistoriesChange,
              choixAntecedents,
              handleAntecedentsChange,
              examenPhysics,
              handleExamenPhysicsChange,
              diagnosticLabel,
              diagnostics,
              handleChangeDiagnostics,
              handleAddDiagnostic,
              handleDeleteDiagnostic,
              traitementSympto,
              handleTraitementSympto,
              bilanComplement,
              handleBilanComplement,
              diagnosticDef,
              diagnosticDefinitif,
              handleChangeDiagnosticDef,
              handleAddDiagnosticDef,
              handleDeleteDiagnosticDef,
              traitementEtiologic,
              handleTraitementEtiologic,
              etatPatientSortie,
              handleEtatPatient,
              rendezVous,
              handleRendezVousChange,
            }}
          >
            {displayStep(currentStep)}
          </StepContext.Provider>
        </div>
        {currentStep !== steps.length + 1 && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
};

export default NewConsultation;
