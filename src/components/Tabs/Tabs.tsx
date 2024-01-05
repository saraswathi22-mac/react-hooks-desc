import React from "react";
import "./Tabs.css";

function Tab(props: any) {
  return <div className={`tabs__content`}>{props.tab.element}</div>;
}

function Navigation(props: any) {
  return (
    <ul className={`tabs__nav`}>
      {props.tabs.map((item: any) => (
        <li key={item.id} className={`tabs__item`}>
          <button
            className={`tabs__button ${
              props.activeTabId === item.id ? "active" : ""
            }`}
            onClick={() => props.onNavClick(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Tabs(props: any) {
  const [activeTabId, setActiveTab] = React.useState(props.tabs[0].id);

  const activeTab = React.useMemo(
    () => props.tabs.find((tab: any) => tab.id === activeTabId),
    [activeTabId, props.tabs]
  );

  return (
    <div className={`tabs`}>
      <Navigation
        tabs={props.tabs}
        onNavClick={setActiveTab}
        activeTabId={activeTabId}
      />
      <Tab tab={activeTab} />
    </div>
  );
}

function TabsList(props: any) {
  return (
    <div className="container">
      <Tabs tabs={props.tabs} />
    </div>
  );
}

export default TabsList;
