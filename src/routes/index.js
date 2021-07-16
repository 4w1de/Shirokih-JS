import Body from '../components/body';
import PageErr from '../components/page-err';
import SignIn from '../components/body/signin';
import CardPage from '../components/body/card-page';
import Settings from '../components/body/settings';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Routes = (props) => (
    <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/signin" component={SignIn} />
        <Route path="/card:id" component={CardPage} />
        {props.role === 'Администратор' ? (
            <Route exact path="/settings" component={Settings} />
        ) : null}
        <Route component={PageErr} />
    </Switch>
);

const mapStateToProps = (state) => {
    return { role: state.auth.role };
};

export default connect(mapStateToProps)(Routes);
