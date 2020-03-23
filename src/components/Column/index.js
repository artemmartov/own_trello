import React from "react";
import { Card, AddForm } from "../index";
import "./Column.scss";
import classNames from "classnames";

const Column = ({ columnIndex, title, cards, onAddColumn, onAddCard, onRemove }) => {

	const removeColumn = () => {
		if (global.confirm('Вы действительно хотите удалить колонку?')) 
		onRemove(columnIndex);
	}
	
  return (
    <div className={classNames("panel", { "panel--empty": !cards })}>
      {title && <div className="panel__title">
        <b>{title}</b>
		<div onClick={removeColumn}>удалить</div>
      </div>}
      {cards && (
        <div className="panel__items">
          {cards.map((elem, index) => (
            <Card key={index}>{elem}</Card>
          ))}
        </div>
      )}

	  <AddForm 
	  columnIndex={columnIndex}
	  isEmptyColumn={!cards} 
	  onAddColumn={onAddColumn} 
	  onAddCard={onAddCard} />
    </div>
  );
};

export default Column;
