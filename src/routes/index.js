import Body from '../components/body';
import PageErr from '../components/page-err';
import SignIn from '../components/body/signin';
import { Route, Switch } from 'react-router-dom';

const Routes = (cchangeModeView) => (
    <Switch>
        <Route
            exact
            path="/"
            render={(props) => <Body cchangeModeView={cchangeModeView} />}
        />
        <Route exact path="/signin" component={SignIn} />
        <Route component={PageErr} />
    </Switch>
);
export default Routes;
