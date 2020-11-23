import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from './Templates/home-temolate';
import {routersHome} from './Route/';
import PageNotFound from './Components/PageNotFound';

const showMenuHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
      <BrowserRouter>
        <Switch>
          {showMenuHome(routersHome)}
          <Route path="" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
