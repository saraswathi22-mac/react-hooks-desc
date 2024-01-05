import AccordionItem from "./AccordionItem";

const Accordion = ({ hiddenTexts }: any) => {
  return (
    <>
      {hiddenTexts.map((hiddenText: any) => (
        <AccordionItem key={hiddenText.id} hiddenText={hiddenText} />
      ))}
    </>
  );
};

export default Accordion;
