import { MainHeading } from "./components/common/Headings/Headings";
import What from "./components/Hooks/Describe/What";
import AdvantagesOfHooks from "./components/Hooks/Describe/Advantages";
import RulesOfHooks from "./components/Hooks/Describe/RulesOfHooks";
import TabsList from "./components/Tabs/Tabs";
import { tabs } from "./components/Hooks/Hooks";
import Accordion from "./components/common/Accordion/Accordion";

const hiddenTexts = [
  {
    id: 1,
    label: "What are Hooks ?",
    value: <What />,
  },
  {
    id: 2,
    label: "Advantages",
    value: <AdvantagesOfHooks />,
  },
  {
    id: 3,
    label: "Rules to be followed",
    value: <RulesOfHooks />,
  },
  {
    id: 4,
    label: "Types",
    value: <TabsList tabs={tabs} />,
  },
];

const App = () => {
  return (
    <div className="m-10 sm:m-20">
      <MainHeading title="React Hooks" />
      <Accordion hiddenTexts={hiddenTexts} />
    </div>
  );
};

export default App;
