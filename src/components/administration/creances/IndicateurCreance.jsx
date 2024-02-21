import Card from "../../shared/Card";

const IndicateurCreance = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <h1 className="font-[600] leading-none">Total des créances</h1>
        <p className="text-[#149cbd] font-[600] text-2xl my-4">2 000 000 GNF</p>
      </Card>
      <Card>
        <h1 className="font-[600] leading-none">
          Total des créances récouvrables
        </h1>
        <p className="text-[#149cbd] font-[600] text-2xl my-4">2 000 000 GNF</p>
      </Card>
      <Card>
        <h1 className="font-[600] leading-none">
          Total des créances non récouvrable
        </h1>
        <p className="text-[#149cbd] font-[600] text-2xl my-4">2 000 000 GNF</p>
      </Card>
    </div>
  );
};

export default IndicateurCreance;
