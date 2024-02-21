import ReglementFilter from "./ReglementFilter";
import ReglementList from "./ReglementList";

const ManageReglement = () => {
  return (
    <div className="mt-5">
      <ReglementFilter />

      <ReglementList />
    </div>
  );
};

export default ManageReglement;
