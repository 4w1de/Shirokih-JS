import Body from '../components/body';
import PageErr from '../components/page-err';
import SignIn from '../components/body/signin';
import CardPage from '../components/body/card-page';
import { Route, Switch } from 'react-router-dom';

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/card:id" component={CardPage} />
        <Route component={PageErr} />
    </Switch>
);
export default Routes;
