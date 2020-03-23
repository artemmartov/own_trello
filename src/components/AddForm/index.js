import React, { Fragment, useState, useRef, useEffect } from "react";
import clear from "../../assets/cancel.png";
import { Card, Button } from "../../components/index";
import "./AddForm.scss";

const AddForm = ({ children, onAddItem, isEmptyPanel }) => {
  const [showForm, setShowForm] = useState(false);
  const textareaRef = useRef(null);
  useEffect(() => {
	  if (textareaRef.current) {
		textareaRef.current.focus(); 
	  }
  }, [showForm]);

  return (
    <Fragment>
      {showForm ? (
        <div className="add-form">
          <div className="add-form__input">
            <Card>
              <textarea placeholder={isEmptyPanel ? 'Введите название колонки' : 'Введите название карточки'}   ref={textareaRef} rows="3"></textarea>
            </Card>
            <div className="add-form__bottom">
              <Button>{isEmptyPanel ? 'Добавить колонку' : 'Добавить карточку'}</Button>
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
            <span>{isEmptyPanel ? 'Добавить еще одну колонку' : 'Добавить еще одну карточку'}</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

// Card.PropTypes = {
// 	text: PropTypes.string
// }

export default AddForm;
