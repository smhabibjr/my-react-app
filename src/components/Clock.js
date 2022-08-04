import React from "react";
// react  Class component
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = new Date();
  }

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <h1 className="clock">
        <span>{new Date().toLocaleTimeString(this.props.locale)} </span>
      </h1>
    );
  }
}

export default Clock;
