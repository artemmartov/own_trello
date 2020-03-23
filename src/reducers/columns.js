const initialState = [
  {
    title: "План на месяц",
    cards: [
      "Пройти курс по React",
      "Записаться на курс английского, чтобы потом уехать в Лондон",
      "Сходить в магазин"
    ]
  },
  {
    title: "План на день",
    cards: ["Сходить в кино", "Поспать", "Сходить в магазин"]
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CARDS:ADD":
      return state.map((item, index) => {
        if (action.payload.columnIndex === index) {
          return {
            ...item,
            cards: [...item.cards, action.payload.text]
          };
        }
        return item;
      });
    case "COLUMNS:ADD":
      return [
        ...state,
        {
          title: action.payload,
          cards: []
        }
      ];
    case "COLUMNS:REMOVE":
      return state.filter((_, index) => action.payload !== index);
    case "CARDS:REORDER": {
      return state.map((item, index) => {
        if (action.payload.columnIndex === index) {
          const [removed] = item.cards.splice(action.payload.sourceIndex, 1);
          item.cards.splice(action.payload.destinationIndex, 0, removed);
          return item;
        }
        return item;
      });
    }
    default:
      return state;
  }
};
