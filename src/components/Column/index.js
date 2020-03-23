import React from "react";
import { Card, AddForm } from "../index";
import "./Column.scss";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import classNames from "classnames";

const Column = ({
  columnIndex,
  title,
  cards,
  onAddColumn,
  onAddCard,
  onRemove,
  onReorder
}) => {
  const removeColumn = () => {
    if (global.confirm("Вы действительно хотите удалить колонку?"))
      onRemove(columnIndex);
  };

  const onDragEnd = ({ source, destination }) => {
	  if ( !destination ||
		  source.droppableId === destination.droppableId &&
		  source.index === destination.index
	  ){
		  return;
	  }

	  
	onReorder({
		columnIndex,
		sourceIndex: source.index,
		destinationIndex: destination.index,
	})
  }

  return (
    <div className={classNames("panel", { "panel--empty": !cards })}>
      {title && (
        <div className="panel__title">
          <b>{title}</b>
          <div onClick={removeColumn}>удалить</div>
        </div>
      )}

      {cards && (
        <div className="panel__items">
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable type='COLUMN' droppableId='board'>
              {(provided, snapshot) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <Card key={index} cardIndex={index}>
                      {card}
                    </Card>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>

        // <div className="panel__items">
        //   {cards.map((elem, index) => (
        //     <Card key={index}>{elem}</Card>
        //   ))}
        // </div>
      )}

      <AddForm
        columnIndex={columnIndex}
        isEmptyColumn={!cards}
        onAddColumn={onAddColumn}
        onAddCard={onAddCard}
      />
    </div>
  );
};

export default Column;
