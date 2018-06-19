import React,{Component} from 'react';
//import Radium from 'radium';
import classes from './Person.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux'
import propTypes from 'prop-types';
import  { AuthContext } from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside constructor',props);
    this.inputElement = React.createRef();
  }
  
  componentWillMount() {
    console.log('[Person.js] Inside ComponentWillMount');
  }
  
  componentDidMount() {
    console.log('[Person.js] Inside ComponentDidMount');
    if(this.props.position===0) {
      this.inputElement.current.focus();
    }
  }
  
  focus() {
    this.inputElement.current.focus();
  }
  
  
  render() {
    console.log('[Person.js] Inside render() method');
    return (
      <Aux classes={classes.Person}>
      <AuthContext.Consumer>
      {auth => auth ? <p>I am authenticated</p> : null}
      </AuthContext.Consumer>
      <p onClick={this.props.click}>Im {this.props.name} and I am {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input
      ref= {this.inputElement}
      type="text"
      onChange={this.props.changed}
      value={this.props.name} />
      </Aux>
    )
    // return [
    //   <p key="1" onClick={this.props.click}> Im {this.props.name} and I am {this.props.age} years old!</p>,
    //   <p key="2"> {this.props.children} </p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
}

Person.propTypes = {
  click: propTypes.func,
  name: propTypes.string,
  age: propTypes.number,
  changed: propTypes.func
};

export default withClass(Person,classes.Person);
