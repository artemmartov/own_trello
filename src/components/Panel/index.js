import React from "react";
import { Card, AddForm } from "../index";
import "./Panel.scss";
import classNames from "classnames";

const Panel = ({ title, cards }) => {
  return (
    <div className={classNames("panel", { "panel--empty": !cards })}>
      {title && <div className="panel__title">
        <b>{title}</b>
      </div>}
      {cards && (
        <div className="panel__items">
          {cards.map((elem, index) => (
            <Card key={index}>{elem}</Card>
          ))}
        </div>
      )}

      <AddForm isEmptyPanel={!cards} />
    </div>
  );
};

export default Panel;
