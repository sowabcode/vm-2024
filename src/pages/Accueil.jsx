import Block1 from "../components/administration/block1/Block1";
import Block2 from "../components/administration/block2/Block2";
import Block3 from "../components/administration/block3/Block3";
import Block4 from "../components/administration/block4/Block4";

const Accueil = () => {
  return (
    <main className="main">
      {/* grid-cols-[34%_auto_34%] */}
      <div className="grid grid-cols-3 grid-flow-row gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
        <Block1 />

        <Block2 />

        <Block3 />
      </div>

      <Block4 />
    </main>
  );
};

export default Accueil;
