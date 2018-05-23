import React from "react";
import { Router,Scene,Drawer } from "react-native-router-flux";
import NewsFeed from "./Components/NewsFeed";
import NewsDetail from "./Components/NewsDetail";
import SideMenu from "./Components/SideMenu";
export default RouterComponent = () => {
    return  <Router>
                <Scene key = "main">
                <Drawer
                hideNavBar
                key="drawer"
                contentComponent={SideMenu}
                drawerWidth={250}
                drawerPosition="left"
                drawerImage={require('./resources/menu.png')}
                ref="navigation"
                tapToClose={true}
                >
                    <Scene
                        key = "newsFeed"
                        component = {NewsFeed}
                        title = "Headlines"
                    />
                </Drawer>
                 <Scene
                        key = "NewsDetail"
                        component = {NewsDetail}
                        title = "Details"
                    />
                </Scene>
            </Router>
}