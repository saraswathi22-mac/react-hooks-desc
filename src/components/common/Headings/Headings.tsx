import React from "react";

interface Title {
  title: string;
}

const MainHeading: React.FC<Title> = ({ title }) => {
  return (
    <div className="text-5xl font-bold text-center font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
      {title}
    </div>
  );
};

const HookHeading: React.FC<Title> = ({ title }) => {
  return <h1 className="heading">{title}</h1>;
};

const HookSubHeading: React.FC<Title> = ({ title }) => {
  return <h1 className="sub-heading">{title}</h1>;
};

export { MainHeading, HookHeading, HookSubHeading };
