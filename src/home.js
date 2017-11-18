const React = require('react');
const createClass = require('create-react-class');

var Banner = createClass({
  render: function () {
    return (
      <div id="banner">
        <div className="tagLine"></div>
        <input type="text" id="q" name="q" placeholder="Search"/>
        <button type="submit" id="qsubmit" name="button"></button>
      </div>
    );
  }
});

var Card = createClass({
  render: function () {
    return (
      <div id="featured" className="card">
        <h2>{this.props.title}</h2>
        <div className="uline"></div>
        <div className="blocksHolder">
          <Block topic={this.props.topic}/>
          <Block topic={this.props.topic1}/>
          <Block topic={this.props.topic2}/>
        </div>
      </div>
    );
  }
});

var Block = createClass({
  render: function () {
    return (
      <div className="block">
        <div className="blkimg">

        </div>
        <div className="title">
          {this.props.topic}
        </div>
      </div>
    );
  }
});

var Home = createClass({
  render: function () {
    return (
      <section id='home'>
        <Banner />
        <Card title="Featured" topic="Topic 1" topic1="Topic 2" topic2="Topic 3"/>
        <Card title="Foundation" topic="Topic 1" topic1="Topic 2" topic2="Topic 3"/>
        <Card title="Data Structures" topic="Topic 1" topic1="Topic 2" topic2="Topic 3"/>
        <Card title="Algorithms" topic="Topic 1" topic1="Topic 2" topic2="Topic 3"/>
      </section>
    );
  }
});

module.exports = Home;
