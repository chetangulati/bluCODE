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
          <div className={'iconBtn active'} section="home">
          <i className="fa fa-home" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn'} section="threads">
          <i className="fa fa-list" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn'} section="profile">
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>
        <div className={'iconBtn'} section="saved">
          <i className="fa fa-bookmark" aria-hidden="true"></i>
        </div>
      </div>
    </header>
    );
  }
});

module.exports = Head;
