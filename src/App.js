import React from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import { Route, Switch } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';

function App() {
  return (
    <>
      <TutorialHeader />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/repos" component={RepoPage} />
        </Switch>
      </Content>
    </>
  );
}

export default App;
