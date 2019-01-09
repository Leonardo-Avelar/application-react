import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class MyButton extends Component {
  render() {
    return <button>{this.props.label}</button>
  }
}

class MyLabel extends Component {
  render() {
    return <p>{this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }
  
  render() {
    return (
      <div className="App">
        <MyLabel text="Hello World from Component."/>
        <MyButton handleclick={this.setLabelText} label="Adicionar"/>
        <MyButton label="Editar"/>
        <MyButton label="Excluir"/>
      </div>
    );
  }
}

export default App;
