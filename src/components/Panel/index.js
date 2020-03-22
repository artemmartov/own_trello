import React from "react";
import { Card, AddForm } from "../index";
import "./Panel.scss";
import classNames from 'classnames';
 

const Panel = ({ cards }) => {
  return (
    <div className={classNames('panel', {'panel--empty': !cards})}>
      {cards &&
	  <div className="panel__items">
        {cards.map((elem, index) => ( 
          <Card key={index}>{elem.text}</Card>
		))}
      </div>}

	  <AddForm />
    </div>
  );
};


export default Panel;
