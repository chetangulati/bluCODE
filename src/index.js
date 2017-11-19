import "./css/app.css";
const React = require('react');
const ReactDom = require('react-dom');
const Head = require('./head');
const Home = require('./home');
const Saved = require('./saved');
const Threads = require('./threads');
const Footer = require('./footer');
const Profile = require('./profile');
var createClass = require('create-react-class');

var Root = createClass({
  renderContent(){
    return (
      <Home />
    );
  },
  render: function () {
    return (
      <div>
        <Head />
        {this.renderContent()}
        <Profile />
        <Footer />
      </div>
    );
  }
});

ReactDom.render(
  <Root />,
  document.getElementById('root')
);
