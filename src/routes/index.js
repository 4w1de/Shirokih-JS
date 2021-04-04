import Body from '../components/body';
import PageErr from '../components/page-err';
import { Route, Switch } from 'react-router-dom';

const Routes = (props) => (
    <Switch>
        <Route
            exact
            path="/"
            render={(props) => <Body changeModeView={props.changeModeView} />}
        />
        <Route component={PageErr} />
    </Switch>
);
export default Routes;
