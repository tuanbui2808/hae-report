import React from 'react';
import 'antd/dist/antd.css';
import { hot } from 'react-hot-loader'
import './index.css';
import { Layout, Menu } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnalystPage from './pages/AnalystPage';
import data from './data.json'
const testuff = require('./untils/TestuffHandling');

const { Header, Content, Footer, Sider } = Layout;

const menuItems = data
const generateMenu = () => {
    const menuData = Object.keys(menuItems);
    const menu = [];
    for (let i = 0; i < menuData.length; i++) {
        let index = i + 1;
        menu.push(
            < Menu.Item key={index} >
                <ProjectOutlined />
                <span>{menuData[i]}</span>
                <Link to={"/" + menuData[i]} />
            </Menu.Item >
        )
    }
    return menu
}

const generatePageData = () => {
    var a = testuff.getTotalTests();
    console.log(a);
    const menuKeys = Object.keys(menuItems)
    const menuPage = []
    for (let i = 0; i < menuKeys.length; i++) {
        let routeMenuItems = "/" + menuKeys[i];
        const dataDashboard = {
            totalTestCase: menuItems[menuKeys[i]]["totalData"][1].total,
            totalAutomationTest: menuItems[menuKeys[i]]["totalData"][0].total,
        }
        const dataInformation = menuItems[menuKeys[i]];
        menuPage.push(
            <div key={i.toString()}>
                <Route
                    exact path={routeMenuItems}
                    component={() => <AnalystPage dataDashboard={dataDashboard} dataInformation={dataInformation} />}
                />
            </div>
        )
    }
    return menuPage
}

const menuGenerate = generateMenu(menuItems);
const pageGenerate = generatePageData(menuItems);


class App extends React.Component {
    state = {
        collapsed: false,
        location: this.props.location
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={[this.state.location]} mode="inline">
                            {menuGenerate}
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{
                            textAlign: "center",
                            fontSize: "large",
                        }}>Report</Header>
                        <Content style={{ margin: '0 16px' }}>
                            {pageGenerate}
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>HAE © 2020</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}

export default hot(module)(App)
