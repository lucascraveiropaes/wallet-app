import React, { Component } from "react";
import {
    ActionConst,
    Lightbox,
    Router,
    Scene,
    Stack,
}                  from "react-native-router-flux";
import { connect } from "react-redux";
import * as Modals from "../modals";
import * as Pages  from "./";

class Routes extends Component {
    render() {
        const { user } = this.props;

        return (
            <Router cardStyle={{ backgroundColor: "#EFFEFE" }}>
                <Lightbox>
                    <Stack key="root" hideNavBar>
                        <Scene key="welcome" component={ Pages.Welcome } initial={ !user.name } type={ ActionConst.REPLACE }/>

                        <Scene key="register" component={ Pages.Register } type={ ActionConst.REPLACE }/>
                        <Scene key="home" component={ Pages.Home } initial={ !!user.name } type={ ActionConst.REPLACE }/>
                    </Stack>
                    <Scene key="newTransaction" hideNavBar component={ Modals.NewTransaction }/>
                    <Scene key="updateInfo" hideNavBar component={ Modals.UpdateInfo }/>
                    <Scene key="menu" hideNavBar component={ Modals.Menu }/>
                </Lightbox>
            </Router>
        )
    }
}

const mapStateToProps = (state, props) => ({
    user: { ...state.user.user }
})

export default connect(mapStateToProps)(Routes);
