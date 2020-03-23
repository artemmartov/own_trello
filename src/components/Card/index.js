import React from "react";
import "./Card.scss";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ cardIndex, children }) => {
  return (
    <Draggable draggableId={`card-${cardIndex}`} index={cardIndex}>
      {(provided, snapshot) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
