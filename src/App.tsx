import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Card from './components/Card';
import Subway from './cmponent/pages/mode/Subway';
import Home from './cmponent/pages/Home';
import Dragmode from './cmponent/pages/mode/Dragmode';
import Runer from './cmponent/pages/mode/Runer';
import Register from './cmponent/pages/Register';
//import Subway from './cmponent/pages/mode/Subway';
/* Core CSS required for Ionic components to work properly */

import Vertical from './components/Vertical';
import Example from './Example';
import Draggable from './components/Draggable';
import Rdux from './components/Rdux';
import Test from './Drag';
import Quiz from './components/Quiz';
import Flashcrds from './cmponent/pages/mode/Flashcrds';
import Uschema from './cmponent/pages/mode/Uschema';
import Quizz from './cmponent/pages/Quizz';
import Splash from './cmponent/pages/mode/Splash';
import DraggableList from './cmponent/pages/DraggableList';
import Acceuil from './cmponent/pages/Acceuil';
import Contact from './cmponent/pages/Contact';
import MyComponent from './cmponent/pages/MyComponent';
import Multipleform from './cmponent/pages/mode/Multipleform';
import Simpleform from './cmponent/pages/mode/Simpleform';
import Newte from './cmponent/pages/Newte';
import Group from './cmponent/pages/Group';
import Questionr from './cmponent/pages/Questionr';
import Group2 from './cmponent/pages/Group2';
import Pintest from './Grille/Pintest';
import Disabled from './shift/Disabled';
import CustomContainer from './shift/CustomContainer';
import Sort from './cmponent/pages/Sort';
//import Sortdata from './cmponent/pages/Sortdata';
import MonComposant from './cmponent/pages/MonComposant';
import Home2 from './cmponent/pages/Home2';
import Choix from './cmponent/pages/Choix';
import Lecon from './cmponent/pages/Lecon';
import Veski from './cmponent/pages/Veski';
import Getstarted from './cmponent/pages/Getstarted';
import { createRouter } from 'router5';
import routes from './routes';

const router = createRouter(routes);
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Getstarted} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/MyComponent" component={MyComponent} />
      </Switch>
    </BrowserRouter>
  </IonApp>
);

export default App;
