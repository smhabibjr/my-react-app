import React from "react";
import ReactDOM from "react-dom";

// functional component

/*function Clock({ locale }) {
  return (
    <h1 className="heading">
      <span>hello world {new Date().toLocaleTimeString(locale)} </span>
    </h1>
  );
}*/


// vanilla  Class component
/*class Clock{
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  ClockElement(locale) {
    return (
      <h1 className="clock">
        hell {this.name} {new Date().toLocaleTimeString(locale)}
      </h1>
    );
  }
}
const clockElement = new Clock("habib", 1999);
ReactDOM.render(clockElement.ClockElement("bn-BD"), document.getElementById("root")); */

// react  Class component
class Clock extends React.Component {
  render() {
    return <h1 className="clock">hell {new Date().toLocaleTimeString(this.props.locale)}</h1>;
  }
}

ReactDOM.render(<Clock locale="bn-BD" />, document.getElementById("root"));
