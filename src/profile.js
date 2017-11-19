var React = require('react');
var createClass = require('create-react-class');

var Profile = createClass({
  render: function () {
    return (
      <section id="profile">
        <h2>User Details</h2>
          <div id="userImg">
            <div id="picHolder">
              <img src={require('./images/default.jpg')} alt="Default User" id="userPic"/>
            </div>
            <img src={require('./images/pframe.png')} alt='frame' id="frame"/>
          </div>
          <div id="userDetails">
            <div className="userCt">
              <div className="row">
                <h3>Username:</h3>
                <p>DefaultUser</p>
              </div>
              <div className="row">
                <h3>Contact:</h3>
                <p>+91-1234567890</p>
              </div>
              <div className="row">
                <h3>Email:</h3>
                <p>DefaultUser@gmail.com</p>
              </div>
            </div>
          </div>
      </section>
    );
  }
});

module.exports = Profile;
