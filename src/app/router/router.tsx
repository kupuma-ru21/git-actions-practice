import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'app/home';
import ZennArticle from 'app/zenn-article';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/zenn_article" exact component={ZennArticle} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
