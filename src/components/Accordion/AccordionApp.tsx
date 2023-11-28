import Accordion from "./Accordion";

const AccordionApp = () => {
  const hiddenTexts = [
    {
      label: "Button 1",
      value: "Text of Accordion 1",
    },
    {
      label: "Button 2",
      value: "Text of Accordion 2",
    },
    {
      label: "Button 3",
      value: "Text of Accordion 3",
    },
    {
      label: "Button 4",
      value: "Text of Accordion 4",
    },
  ];
  return (
    <div>
      <Accordion hiddenTexts={hiddenTexts} />
    </div>
  );
};

export default AccordionApp;
