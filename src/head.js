const React = require('react');
var createClass = require('create-react-class');

var Head = createClass({
  render: function () {
    return (
      <header>
        <div id="topNav">
          <div id="topMenu"></div>
          <h1><img src={require('./images/logo.svg')} alt="Blu.Code"/></h1>
        </div>
       <div id="bottomNav">
          <div className={'iconBtn'} onClick={this.handleBtnClick} section="home">
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn active'} onClick={this.handleBtnClick} section="threads">
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn'} onClick={this.handleBtnClick} section="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn'} onClick={this.handleBtnClick} section="saved">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
        </div>
      </div>
    </header>
    );
  }
});

module.exports = Head;
