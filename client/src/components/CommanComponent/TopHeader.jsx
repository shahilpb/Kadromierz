import React, { Component } from 'react'

export default class TopHeader extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-md navbar-dark header-after-login">
  <div className="container">
    <a className="navbar-brand" href="#1">
      <img src="assets/images/logo_white.png" alt=""/>
      <img className="color-logo w-130" src="assets/images/logo_white.png" alt=""/>
    </a>
     <div className="d-md-flex flex-row-reverse ml-auto">
      <ul className="d-flex flex-row align-items-center navbar-nav" >
          <li className="nav-item dropdown dropdown-notifications">
            <a className="nav-link dropdown-toggle" href="#3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <p><i className="zmdi zmdi-notifications-none zmdi-hc-lg d-block mx-auto"></i></p>
              Notifications
            </a>
            <div className="dropdown-menu dropdown-menu-right m-0">
              <div className="log-arrow-up"></div>
              <div className="media">
                <div className="media-left pr-3">
                  <img src="assets/images/noti-img.png"  
                  className="dropdown-img rounded-circle" alt=""/>
                </div>
                <div className="media-body">
                  <p className="mb-0">John Smith has accepted Request.</p>
                  <span className="d-block font-14 text-primary">2 min ago</span>
                </div>
              </div>
              <div className="media">
                <div className="media-left pr-3">
                  <img src="assets/images/noti-img-2.png"
                   className="dropdown-img rounded-circle" alt=""/>
                </div>
                <div className="media-body">
                  <p className="mb-0">John Smith has accepted Request.</p>
                  <span className="d-block font-14 text-primary">15 min ago</span>
                </div>
              </div>
              <div className="media">
                <div className="media-left pr-3">
                  <img src="assets/images/noti-img.png"
                   className="dropdown-img rounded-circle" alt=""/>
                </div>
                <div className="media-body">
                  <p className="mb-0">John Smith has accepted Request.</p>
                  <span className="d-block font-14 text-primary">15 min ago</span>
                </div>
              </div>
              <div className="media">
                <div className="media-left pr-3">
                  <img src="assets/images/noti-img-2.png"
                   className="dropdown-img rounded-circle" alt=""/>
                </div>
                <div className="media-body">
                  <p className="mb-0">John Smith has accepted Request.</p>
                  <span className="d-block font-14 text-primary">15 min ago</span>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown dropdown-usermenu">
            <a className="nav-link dropdown-toggle pl-1" href="#2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="rounded-circle d-block mx-auto" alt="" src="assets/images/header-img.png" style={{width:'24px',height:'24px'}}/>
              <span className="username d-none ml-2 d-md-inline">Me</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right m-0 border-0">
              <div className="log-arrow-up"></div>
              <a className="dropdown-item" href="#1"><i className="zmdi zmdi-home zmdi-hc-lg"></i> Home</a>
              <a className="dropdown-item" href="#2"><i className="zmdi zmdi-account zmdi-hc-lg"></i> Profile</a>
              <a className="dropdown-item" href="#3"><i className="zmdi zmdi-help zmdi-hc-lg"></i> Help & Support</a>
              <a className="dropdown-item" href="#4"><i className="zmdi zmdi-power zmdi-hc-lg"></i> Logout</a>
            </div>
          </li>
      </ul>
      <div className="collapse navbar-collapse border-top-custom" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#5"><p><i className="zmdi zmdi-home zmdi-hc-lg d-block mx-auto"></i></p> Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#6"><p><i className="zmdi zmdi-plus zmdi-hc-lg d-block mx-auto"></i></p> Create</a>
            </li>
          </ul>
      </div>
    </div>
     <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
        )
    }
}
