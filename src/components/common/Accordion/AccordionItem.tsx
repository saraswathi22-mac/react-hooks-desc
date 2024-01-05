import { useState } from "react";

const AccordionItem = ({ hiddenText }: any) => {
  const [visibility, setVisibility] = useState(false);

  const activeStatus = visibility ? "active" : "";

  const handleToggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <button className="accordion__button " onClick={handleToggleVisibility}>
        {hiddenText.label}
        <span className={visibility ? "fas fa-minus" : "fas fa-plus"}></span>
      </button>
      <p className={`accordion__content ${activeStatus}`}>{hiddenText.value}</p>
    </>
  );
};

export default AccordionItem;
