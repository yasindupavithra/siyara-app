import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";

import Routing from './Routes/Routing';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope", "sans-serif"],
      },
    });
  }, []);

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
