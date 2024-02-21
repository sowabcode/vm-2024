import Card from "../shared/Card";
import ConsultationList from "./ConsultationList";
import NavDemo from "./NavDemo";
import Title from "./Title";

import { BiSearch } from "react-icons/bi";

const Consultation = () => {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <Title title={"Consultations"} />

        <div className="bg-slate-300 rounded-md relative">
          <input
            type="search"
            placeholder="Rechercher"
            className="w-full border rounded-md py-1 pl-7 pr-2"
          />
          <BiSearch className="absolute left-2 top-1/3" />
        </div>
      </div>

      <div className="mt-5">
        <NavDemo />
      </div>

      <ConsultationList />
    </Card>
  );
};

export default Consultation;
