import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      age: '',
      gender: '',
      password: '',
      occupation: '',
     }
  }

handleSubmit = (e) => {
  e.preventDefault()
}

handleInput = () => {
  document.getElementById('username').innerHTML = this.state.username;
  document.getElementById('age').innerHTML = this.state.age;
  document.getElementById('gender').innerHTML = this.state.gender;
  document.getElementById('occupation').innerHTML = this.state.occupation;
  document.getElementById('password').innerHTML = this.state.password;
  document.getElementById('proceed').style.display = 'block'
}


  render() { 
    return ( 
      <div className='App' >
        <h1> Sign UP! </h1>
        <form className='form' onSubmit={this.handleSubmit} >
          <input type='username' placeholder='User name' onChange={e => this.setState({username: e.target.value})} required/>
          <input type='age' placeholder='Age' onChange={e => this.setState({age: e.target.value})} />
          <input type='gender' placeholder='Gender' onChange={e => this.setState({gender: e.target.value})} />
          <input type='text' placeholder='Occupation' onChange={e => this.setState({occupation: e.target.value})} />
          <input type='password' placeholder='Password' onChange={e => this.setState({password: e.target.value})} required/>
          <button onClick={this.handleInput} > Submit </button>
        </form>
        <ul className='userInfo-display' >
        <h1 style={{display: 'none'}} id='proceed' > Are you ok with this information? </h1>
          <li id='username' > </li>
          <li id='age' > </li>
          <li id='gender' > </li>
          <li id='occupation' > </li>
          <li id='password' > </li>
        </ul>
      </div>
     );
  }
}
 
export default App;
