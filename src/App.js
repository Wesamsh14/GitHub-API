import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Info from './Info';
import Repositories from './Repositories';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      userName:'',
      userInfo:[],
      userRepositories:[]
    }
  }

  textChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  formSubmit=(e)=>{
    e.preventDefault();
    const clientId = 'f271743880bf645500bb';
    const clientSecret = 'c4f71fc16d3780c4d581ee2c9cf54012c700cacc'
    axios
    .get(`http://api.github.com/users/${this.state.userName}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
    .then((response)=> {
      const info = response.data;
      this.setState({ userInfo : info})
    })
    .catch((error)=> {
      console.log(error);
    });

    axios
    .get(`https://api.github.com/users/${this.state.userName}/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
    .then((response)=> {
      const repositories = response.data;
      this.setState({ userRepositories : repositories })
    })
    .catch((error)=> {
      console.log(error);
    });

  }

  render() {
    return (
      <div className='App'>
        <h1 className='form'> Github API </h1> 
        <form className='form' onSubmit={this.formSubmit}>
          <input type='text' name='userName' placeholder='Get user Github'
            onChange={this.textChange} />
          <input type='submit' />  
        </form>
          {this.state.userInfo.length == null ?
            <div>
              <div>
                <Info userInfo={this.state.userInfo} />
              </div>
              <hr />
              <div>
                <h3>User Repositories</h3>
                <Repositories userRepositories={this.state.userRepositories} />
              </div>
            </div>  
        : null
        }
        
        
      </div>
    );
  }
}

export default App;
