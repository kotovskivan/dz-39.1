import { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Class компонент</h2>
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.increment}>Збільшити</button>
      </div>
    );
  }
}

export default ClassCounter;
