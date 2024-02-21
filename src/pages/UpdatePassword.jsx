import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginContext from "../context/LoginContext";

const UpdatePassword = () => {
  const { userNameWhenUpdatePass, UpdatePassword } = useContext(LoginContext);

  const navigate = useNavigate();
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showError, setShowError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({ ...password, [name]: value });
  };

  const handleChangePassword = () => {
    if (password.newPassword.trim().length >= 6) {
      if (password.newPassword !== password.confirmPassword) {
        return setShowError("Les deux mots de pass sont différents");
      }
      const data = {
        username: userNameWhenUpdatePass,
        password: password.newPassword,
      };
      // console.log(data);
      UpdatePassword(data);
    } else {
      return setShowError(
        "Le nouveau mot de passe doit avoir au minimum 6 caractères !"
      );
    }
  };
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="w-[500px] m-auto border mt-24 shadow-lg">
      <h1 className="text-2xl font-medium text-center h-14 pt-3 bg-[#149cbd] text-white">
        Modifier votre mot de passe
      </h1>
      <p className="font-medium text-[#149cbd] text-sm my-6 mx-10">
        Pour des questions de sécurités, nous vous demandons de bien vouloir
        mettre à jour votre mot de passe, merci !
      </p>
      <hr />
      <div className="space-y-3 mx-16 mt-4 pb-5">
        <div className="grid grid-cols-1 gap-1">
          {showError.trim() !== "" ? (
            <p className="font-medium text-sm text-red-400">{showError}</p>
          ) : (
            ""
          )}
          <label htmlFor="ancienPass" className="font-medium text-sm">
            Ancien mot de passe
          </label>
          <input
            type="password"
            name="oldPassword"
            value={password.oldPassword}
            onChange={handleChange}
            placeholder="Ancien mot de passe"
            className="py-1.5 px-2 border-2 border-gray-700 rounded"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <label htmlFor="newPass" className="font-medium text-sm">
            Nouveau mot de passe
          </label>
          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handleChange}
            placeholder="Nouveau mot de passe"
            className="py-1.5 px-2 border-2 border-gray-700 rounded"
          />
        </div>
        <div className="grid grid-cols-1 gap-1">
          <label htmlFor="confirmPass" className="font-medium text-sm">
            Confirmer le noveau mot de passe
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handleChange}
            placeholder="Confirmer le nouveau mot de passe"
            className="py-1.5 px-2 border-2 border-gray-700 rounded"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white mt-3 px-5 py-1.5 rounded font-medium uppercase"
          >
            Annuler
          </button>
          <button
            onClick={handleChangePassword}
            className="bg-[#149cbd] text-white mt-3 px-5 py-1.5 rounded font-medium uppercase"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
