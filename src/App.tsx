import React from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import routes from "./routes";
import { renderRoutes, RouteConfig } from "react-router-config";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <Content>
          {
            renderRoutes(routes as RouteConfig[])
          }
        </Content>
      </main>
    </div>
  );
}

export default App;
