import React, {Component} from 'react';
import './App.css';
import axios from "axios";
import User from "./components/User";
class App extends Component {
  constructor(){
    super();
    this.state = {
      profile: {},
      username: "juniordugue",
      // avatar_url: "",
      // login: [],
      // name: [],
      // company: [],
      // location: [],
      // bio: "",
      followers: [],
      // following: [],
    }
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    }) 
  }

  componentDidMount(){
    axios.get(`https://api.github.com/users/${this.state.username}`)
      .then(res => {
        console.log(res)
        this.setState({profile: res.data})
      })
      .catch(err => {
        console.log('Not success', err)
      })
    axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then(res => {
        console.log(res)
        this.setState({followers: res.data})
      })
      .catch(err => {
        console.log('error', err)
      })
  }

    render(){
      return (
        <div className="App">
          <h1>Github User Card</h1>
          <div>
            <User {...this.state.profile} follower = {this.state.followers}/>
          </div>
        </div>
    );
  }
}

export default App;
