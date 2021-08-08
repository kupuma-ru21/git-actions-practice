import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'app/home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
