import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


class AddDeployment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      template_name: [],
      version: []
    }
  }

  // const mockdata = 'https://gist.github.com/Abby9224/52b02e53cfdb3aa5b2a08c458464531d';
  // const mock_data = '/MOCK_DATA.json';
  // renderMockData() {
  //   for(var i = 0; i < mock_data.length; i++) {
  //     console.log(mock_data[i]);
  //   }
  // }


  handleChange(event) {
    this.setState({
      template_name: this.event.target,
      version: this.event.target
    })
    console.log('hey');
  }

  render() {
    return (
      <motion.div className="container" initial={{ x: '-100vw'}} animate={{ x: 0 }}>
        <form className="deployment-form">
          <h4 className="center">Add a new deployment</h4>
          <div>
            <label>Select a template name:
              <select value="" onChange={this.handleChange}>
              </select>
            </label>
          </div>
          <div>
            <label>Select a version:
            <select>
              <option>v1.4.2</option>
              <option>v5.3.4</option>
            </select>
            </label>
          </div>
          <div>
            <label>Enter the URL:
              <input type="text" required placeholder="https://www.example.com/fun" />
            </label>
          </div>
          <p className="grey-text text-lighten-1">Deployed at:</p>
          <div id="btn-align" className="center">
            <button className="waves-effect waves-light btn blue">Add</button>
            <Link to='/'>Cancel</Link>
          </div>
        </form>
      </motion.div>
    );
  }
}

export default AddDeployment;
