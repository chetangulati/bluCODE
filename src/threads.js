const React = require('react');
const createClass = require('create-react-class');

var Threads = createClass({
  render: function () {
    return (
      <section id="threads">
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
        
      </div>
    );
  }
});
module.exports = Threads;
