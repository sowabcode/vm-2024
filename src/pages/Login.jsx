import { useContext, useEffect, useState } from "react";

import vm_logo from "../assets/images/vm_logo.png";
import login_img from "../assets/images/login.jpg";

import LoginContext from "../context/LoginContext";
import { Navigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { userLogin } from "../actions/login.action";
// import { useSelector } from "react-redux";

const Login = () => {
  const {
    loading,
    setLoading,
    handleSubmit,
    loginError,
    setUserNameWhenUpdatePass,
  } = useContext(LoginContext);

  // const user = useSelector((state) => state.loginReducer);
  // console.log(user);

  // const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  const handleGetInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  useEffect(() => {
    if (
      loginInfo.username.trim() !== "" &&
      loginInfo.password.trim().length >= 3
    ) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [loginInfo.password, loginInfo.username]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setUserNameWhenUpdatePass(loginInfo.username);
    handleSubmit(loginInfo);
    // console.log(loginInfo);
    // dispatch(userLogin(loginInfo));
  };

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUserInfo(getUserInfo);
  }, []);

  if (userInfo && userInfo?.users?.role === "Médecin") {
    return <Navigate to="/espace_medecin" />;
  }

  if (userInfo && userInfo?.users?.role === "Perceptrice BE") {
    return <Navigate to="/bureau-dentre" />;
  }

  return (
    <div className="grid grid-cols-[40%_auto] h-screen max-lg:grid-cols-1">
      <div className="flex flex-col items-center gap-5 px-20 mt-16 max-lg:px-56 max-md:px-32 max-sm:px-8">
        <div className="flex items-center gap-4 mb-5">
          <img src={vm_logo} className="w-10 max-sm:w-7" alt="" />
          <h1 className="text-5xl space-x-2 max-sm:text-4xl">
            <span className="font-[600] text-[#149cbd]">VISA</span>
            <span>MEDICAL</span>
          </h1>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">
            Plateforme centrée sur le bien être du patient
          </h1>
          <p className="text-sm font-medium">
            Permet aux médecins d&apos;obtenir des vues récapitulatives sur les
            profils des patients, d&apos;accéder aux dossiers médicaux, de voir
            les resultats de laboratoire, les résumés cliniques des spécialistes
            et l&apos;historique complète des médications.
          </p>
        </div>

        <div className="w-full space-y-3">
          {loginError.trim().length > 0 && (
            <p className="text-red-400 text-sm font-medium">{loginError}</p>
          )}
          <input
            type="text"
            name="username"
            value={loginInfo.username}
            onChange={handleGetInfo}
            placeholder="Entrer votre nom d'utilisateur"
            className="border-2 border-gray-400 block w-full rounded-md px-2 py-2"
          />
          <input
            type={!showPassword ? "password" : "text"}
            name="password"
            value={loginInfo.password}
            onChange={handleGetInfo}
            placeholder="Entrer votre mot de passe"
            className="border-2 border-gray-400 block w-full rounded-md px-2 py-2"
          />

          <div className="space-x-2 flex items-center">
            <input
              type="checkbox"
              name="showPassword"
              value={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              id="passe"
            />
            <label htmlFor="passe" className="font-medium">
              Afficher le mot de passe
            </label>
          </div>

          <button
            type="submit"
            disabled={btnDisabled || loading ? "disabled" : ""}
            onClick={handleLogin}
            className={`${
              btnDisabled || loading
                ? "w-full bg-[#dddddd] text-white py-2 rounded-md font-medium cursor-not-allowed"
                : "w-full bg-[#149cbd] text-white py-2 rounded-md font-medium mt-5"
            }`}
          >
            Se Connecter
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${login_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="max-lg:hidden"
      ></div>
    </div>
  );
};

export default Login;
