import AccordionItem from "./AccordionItem";

const Accordion = ({ hiddenTexts }: any) => {
  return (
    <div>
      {hiddenTexts.map((hiddenText: any) => (
        <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
      ))}
    </div>
  );
};

export default Accordion;
