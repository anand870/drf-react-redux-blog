import React, { Component } from 'react';

class Header extends Component{
  render(){
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <a className="navbar-brand" href="">My Blog</a>
          <div className="col-md-6 offset-md-3">
              <form className="input-group">
                  <input className="form-control" name="search" placeholder="Search Here" autoComplete="off" autoFocus="autofocus" type="text" />
                  <div className="input-group-btn">
                      <button className="btn btn-outline-success" type="submit">Search</button>
                  </div>
              </form>
          </div>
      </nav>
    );
  }
}
export default Header

