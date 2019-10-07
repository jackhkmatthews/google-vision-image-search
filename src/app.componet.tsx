import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Images from "./components/images/images.component";
import Image from "./components/image/image.component";

interface Props {
  store: any;
}

const App: React.FC<Props> = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} exact={true} />
      <Route path="/images" component={Images} exact={true} />
      <Route path="/images/:index" component={Image} exact={true} />
    </Router>
  </Provider>
);

export default App;
