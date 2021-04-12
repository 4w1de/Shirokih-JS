import Body from '../components/body';
import PageErr from '../components/page-err';
import SignIn from '../components/body/signin';
import { Route, Switch } from 'react-router-dom';

const Routes = (props) => (
    <Switch>
        <Route
            exact
            path="/"
            render={() => <Body changeModeView={props.changeModeView} />}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route component={PageErr} />
    </Switch>
);
export default Routes;
