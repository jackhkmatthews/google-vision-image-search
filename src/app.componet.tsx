import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Images from "./components/images/images.component";
import Image from "./components/image/image.component";
import GlobalStyles from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./utils/stack-blur";

interface Props {
  store: any;
}

const App: React.FC<Props> = ({ store }: Props) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Router>
          <Route path="/" component={Home} exact={true} />
          <Route path="/images" component={Images} exact={true} />
          <Route path="/images/:slug" component={Image} exact={true} />
        </Router>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
