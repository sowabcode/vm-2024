import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Tabs, Tab } from "react-tabs-scrollable";
import "react-tabs-scrollable/dist/rts.css";

const NavDemo = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selected, setSelected] = useState("");

  const navigate = useNavigate();
  // const router = useRouter();

  // get the id of the page and turn it into integer
  const pageId = +navigate.asPath;
  useEffect(() => {
    // if it equals 0 set the active tab to 0
    if (pageId === 0) {
      setActiveTab(0);
      return;
    }
    // set the active tab state to the page id that we selected
    setActiveTab(pageId || 1);
  }, [pageId]);
  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <>
      <Tabs
        className="mt-10"
        activeTab={activeTab}
        onTabClick={onTabClick}
        navBtnClassName="w-8 h-8 rounded-full mt-5 hover:bg-[#149cbd]"
      >
        {/* generating an array to loop through it  */}
        {[
          { name: "Patients en Attente", count: 6 },
          { name: "Avis demandés", count: 3 },
          { name: "Examens demandés", count: 10 },
        ].map((item, index) => (
          <Tab
            key={index}
            className="rounded-md px-4 bg-gray-200 text-gray-400"
            // change the router into the selected tab id
            onClick={() => setSelected(item.name)}
          >
            <div className="flex items-center gap-4 font-semibold">
              <span className="">{item.name}</span>{" "}
              <span className="px-2 rounded-full">{item.count}</span>
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
};

export default NavDemo;
