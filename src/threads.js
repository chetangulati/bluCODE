const React = require('react');
const createClass = require('create-react-class');

var Threads = createClass({
  render: function () {
    return (
      <section id="threads">
        <div id="blankspace"></div>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </section>
    );
  }
});

var ListItem = createClass({
  render: function () {
    return (
      <div className="listItem">
          <div className="ans">
            <div className="ans_no"></div>
          </div>
          <div className="topic">
            <h3>Title</h3>
            <p>
             ffsfdf, fasfasff, fdfdsdfa
            </p>
          </div>
          <div className="viewbtnn">
            <img src={require('./images/viewbtn.svg')} alt=''/>
          </div>
      </div>
    );
  }
});
module.exports = Threads;
