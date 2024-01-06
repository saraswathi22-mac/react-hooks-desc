import React from "react";

interface Reference {
  reference: string;
}

const PenDown = ({ reference }: Reference) => {
  return (
    <a href={reference} target="_blank" rel="noreferrer">
      &#9997;
    </a>
  );
};

export default PenDown;
