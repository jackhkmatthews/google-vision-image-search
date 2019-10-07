import React from "react";
import Home from "./components/home/home.component";
import Images from "./components/images/images.component";
import Image from "./components/image/image.component";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <Images />
      <Image />
    </div>
  );
};

export default App;
