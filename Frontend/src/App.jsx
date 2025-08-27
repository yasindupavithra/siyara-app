import './App.css';
import WebFont from "webfontloader";
import { useEffect } from "react";

import Routing from './Routes/Routing';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Manrope:400,500,600,700", "sans-serif"],
      },
    });
  }, []);

  return (
    <div className="App">
      {/* Container එක fully responsive කරන්න */}
      <div className="app-container">
        <Routing />
      </div>
    </div>
  );
}

export default App;
