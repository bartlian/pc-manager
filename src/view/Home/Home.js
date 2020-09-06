import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { useStore } from 'react-redux';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LogoutOutlined, UnorderedListOutlined,  UsergroupAddOutlined } from '@ant-design/icons';
import './Home.scss';
import Scenery from '../Scenery/Scenery';
import User from '../User/User';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function Home() {
  const store = useStore();
  let history = useHistory();
  console.log(store.getState());
  const token = localStorage.getItem('token');
  const authed = store.getState().isLogin || !!token;

  if (!authed) {
    history.replace('/login');
  }

  const showUserInfo = (e) => {
    console.log(e);
  };

  const quit = () => {
    console.log('quit');
  }


  return (
    <Layout>
      <Header className="header">
        <h1 className="logo">CMS</h1>
        <div className="header-setting">
          <UserOutlined style={{fontSize: 24, marginRight: 20}} onClick={showUserInfo} />
          <LogoutOutlined style={{fontSize: 24}} onClick={quit} />
        </div>
      </Header>
      <Layout>
        <Sider  
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UnorderedListOutlined />} title="景色模块">
              <Menu.Item key="1">
                <Link to="/scenery">列表</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/scenery">图表</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UsergroupAddOutlined />} title="用户管理">
              <Menu.Item key="5">
                <Link to="/user">列表</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px', marginLeft: 200 }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: '24px 0',
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route path="/scenery" component={Scenery}/>
              <Route path="/user" component={User}/>
              <Route path="*" component={Scenery}/>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default Home;