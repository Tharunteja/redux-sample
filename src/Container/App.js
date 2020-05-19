import React, {Component } from 'react';
import { connect } from 'react-redux';


import './App.css';
import {getUsers, addNewUser, deleteUser} from '../store/action';
import HookForm from './hook-form';

class App extends Component{
  constructor(props){
    super(props);
    this.myInput = React.createRef();
    // this.changeUserName = this.changeUserName.bind(this);
    // const { register, handleSubmit } = useForm();
  }
  
  componentDidMount(){
    // axios.get('https://jsonplaceholder.typicode.com/users')
    //   .then(response => {
    //     console.log(response);
    //   })
    //console.log();
    this.props.getUsers();
    //console.log(this.props.users);

  }
  // changeUserName(e) {
    
  //   this.props.changeUser(this.myInput.current.value);
  //   this.myInput.current.value = '';
  // }

  onFormAdd = (data) => {
    console.log(data);
    this.props.changeUser(data);
  }

  render(){ 
    return ( 
      <div className="App">
        {this.props.users.length > 0 ? 
          <ul className="user-list">
            {this.props.users.map(user => {
              return <li className="user-info" key={user.id} onClick={() => this.props.removeUser(user.id)}>
                <span>{user.username}</span>
                <span>{user.id}</span>
              </li>
            })}
          </ul>
          : <p>No data loaded</p>}
        

        <HookForm onFormAdd={this.onFormAdd}/>
            
        {/* <input ref={this.myInput} type="text"/>  */}
        {/* <button onClick={this.changeUserName}>Add User</button> */}
        <br/>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    username: state.username
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    getUsers: () => dispatch(getUsers()),
    changeUser: (x) => {
      console.log(x)
      dispatch(addNewUser(x)) 
    },
    removeUser: (id) => {
      dispatch(deleteUser(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
