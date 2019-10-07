import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/home.component";
import Images from "../images/images.component";
import Image from "../image/image.component";

interface Props {
  store: any;
}

const Root: React.FC<Props> = ({ store }: Props) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} exact={true} />
      <Route path="/images" component={Images} exact={true} />
      <Route path="/images/:id" component={Image} exact={true} />
    </Router>
  </Provider>
);

export default Root;
