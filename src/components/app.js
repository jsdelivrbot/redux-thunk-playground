import React, { Component } from 'react';
import { connect } from 'react-redux'

import {fetchUsers} from '../actions/index'

class App extends Component {

  componentWillMount() {
    this.props.fetchUsers();  
  }


  renderUsers(){
    console.log(this.props);
    if (!this.props.users)
      return <div>Loading ...</div>

    return this.props.users.map((user) => {
      return(
        <li key={user.id} className="list-group-item">
          {user.name}
          <span className="label label-default label-pill pull-xs-right">
            <a href={user.email}>{user.email}</a>
          </span>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>List of Users</h1>
          <ul className="list-group">
            {this.renderUsers()}
          </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.all
  }
}

export default connect(mapStateToProps, {fetchUsers})(App)