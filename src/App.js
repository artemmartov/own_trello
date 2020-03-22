import React from "react";
import { Card, Panel, Button } from "./components/index";
import "./App.scss";

function App() {
  return (
    <div>
      <Panel items={[
		  {text: 'Пройти курсы по реакту'},
		  {text: 'Погулять'},
		  {text: 'Сходить в магазин'}
	  ]} />
        {/* <Card text="Hello" /> */}
		{/* <Button />  */}

    </div>
  );
}

export default App;
