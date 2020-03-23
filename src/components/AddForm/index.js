import React, { Fragment, useState, useRef, useEffect } from "react";
import clear from "../../assets/cancel.png";
import { Card, Button } from "../../components/index";
import "./AddForm.scss";

const AddForm = ({
  columnIndex,
  children,
  onAddCard,
  onAddColumn,
  isEmptyColumn
}) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const onAdd = () => {
    if (isEmptyColumn) {
      onAddColumn(value);
    } else {
      onAddCard(columnIndex, value);
    }
    setValue("");
    setShowForm(false);
  };

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea
                onChange={e => setValue(e.target.value)}
                value={value}
                placeholder={
                  isEmptyColumn
                    ? "Введите название колонки"
                    : "Введите название карточки"
                }
                ref={textareaRef}
                rows="3"
              ></textarea>
            </Card>
            <div className="add-form__bottom">
              <Button onClick={onAdd}>
                {isEmptyColumn ? "Добавить колонку" : "Добавить карточку"}
              </Button>
              <img
                onClick={setShowForm.bind(this, false)}
                className="add-form__bottom-clear"
                src={clear}
                alt="clear svg"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="add-form__bottom">
          <div
            onClick={setShowForm.bind(this, true)}
            className="add-form__bottom-add-btn"
          >
            <span>
              {isEmptyColumn
                ? "Добавить еще одну колонку"
                : "Добавить еще одну карточку"}
            </span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default AddForm;
