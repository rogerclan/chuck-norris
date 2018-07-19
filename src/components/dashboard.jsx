import React from 'react';
import Panel from "./panel";
import Header from "./header";
import Logo from './logo';

const Dashboard = () => {
    return (<div>
        <Header />
        <Logo />
        <Panel/>
    </div>);
};

export default Dashboard;