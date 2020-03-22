import React from "react";
import { Card, Panel, Button } from "./components/index";
import "./App.scss";

function App() {
  return (
    <div className='app'>
      <Panel cards={[
		  {text: 'Пройти курсы по реакту'},
		  {text: 'Погулять'},
		  {text: 'Сходить в магазин'}
	  ]} />
    <Panel cards={null} />

    </div>
  );
}

export default App;
