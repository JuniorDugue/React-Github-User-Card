import React, {Component} from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  constructor(){
    super();
    this.state = {
      login: "",
      name: "",
      company: "",
      location: "",
      bio: "",
      followers: "",
      following: "",
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    }) 
  }

  componentDidMount(){
    axios.get("https://api.github.com/users/juniordugue")
    // axios.get(`https://api.github.com/users/${this.state.name}`)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log('error', err)
    })
  }

    render(){
      return (
        <div className="App">
          <h1>Github User Card</h1>

        </div>
    );
  }
}

export default App;
