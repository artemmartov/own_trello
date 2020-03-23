import React, { Fragment } from "react";
import { Column } from "../components/index";
import { connect } from "react-redux";
import columnsActions from "../actions/columns";
import cardsActions from "../actions/cards";

const Columns = ({ items, addColumn, addCard, removeColumn, reorderCards }) => (
  <Fragment>
    {items.map((item, index) => (
      <Column
        key={index}
        {...item}
        columnIndex={index}
        onAddColumn={addColumn}
        onAddCard={addCard}
        onRemove={removeColumn}
        onReorder={reorderCards}
      />
    ))}
    <Column onAddColumn={addColumn} onAddCard={addCard} />
  </Fragment>
);

export default connect(({ columns }) => ({ items: columns }), {
  ...columnsActions,
  ...cardsActions
})(Columns);
