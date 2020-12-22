import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  render () {
    console.log(this.props);
    return(
      <div className="container">
        <h4 className="center">Deployments list</h4>
        
      </div>
    );
  }
}

// Mapping state to props:
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
