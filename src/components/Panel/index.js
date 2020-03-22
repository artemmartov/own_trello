import React, { Fragment } from "react";
import { Button, Card, AddForm } from "../index";
import "./Panel.scss";



const Panel = ({ items }) => {
  return (
    <div className="panel">
      <div className="panel__items">
        {items.map(elem => (
          <Card {...elem} />
		))}
      </div>
	  <AddForm />
    </div>
  );
};


export default Panel;
