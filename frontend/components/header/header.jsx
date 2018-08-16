import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if(this.props.currentUser === undefined){
      return(
        <div className='header-nav'>
          <nav className="left">

            <Link to ='/'><img src={window.images.logo}></img></Link>
          </nav>
          <nav className="right">
            <Link to='/events'>SPORT EVENTS</Link>
            <Link to='/about'>ABOUT</Link>
            <button onClick={() => this.props.login()}>DEMO LOGIN</button>
            <Link onClick={() => this.props.clearErrors()} to='/login'>SIGN IN</Link>
            <Link onClick={() => this.props.clearErrors()} to='/signup' className='signup-button'>SIGN UP</Link>
          </nav>
          <nav className="center">
            <div className= "hamburger-dropdown">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <Link to='/about'>ABOUT</Link>
              <button onClick={() => this.props.login()}>DEMO LOGIN</button>
              <Link onClick={() => this.props.clearErrors()} to='/login'>SIGN IN</Link>
              <Link onClick={() => this.props.clearErrors()} to='/signup' className='signup-button'>SIGN UP</Link>
            </div>
            </nav>

        </div>
      );
    } else {
      return (
        <header>
          <div className='header-nav'>
            <nav className="left">
              <Link to ='/'><img src={window.images.logo}></img></Link>
              <p>Hello, {this.props.currentUser.name}</p>
            </nav>
            <nav className="right">
              <Link to='/events'>SPORT EVENTS</Link>
              <Link to='/events/new'>HOSTING</Link>
              <Link to='/dashboard'>DASHBOARD</Link>
              <button onClick={this.props.logout}>SIGN OUT</button>
            </nav>
            <div className="empty-space"></div>
            <nav className="center">
              <div className= "hamburger-dropdown">
                <Link to='/events'>SPORT EVENTS</Link>
                <Link to='/events/new'>HOSTING</Link>
                <Link to='/dashboard'>DASHBOARD</Link>
                <button onClick={this.props.logout}>SIGN OUT</button>
              </div>
            </nav>
          </div>
        </header>
      );
    }
  }
}


export default Header;
