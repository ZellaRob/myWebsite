import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Helen Roberts</Link>} scroll>
            <Navigation>
				{/*<Link to="/contact">Contact</Link>*/}
				<Link to="/resume">Resume</Link>
				<Link to="/projects">Projects</Link>
                {/*<Link to="/aboutme">About Me</Link>*/}
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Helen Roberts</Link>}>
            <Navigation>
			 {/* <Link to="/contact">Contact</Link>*/}
			  <Link to="/resume">Resume</Link>
			  <Link to="/projects">Projects</Link>
              {/* <Link to="/aboutme">About Me</Link>*/}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
