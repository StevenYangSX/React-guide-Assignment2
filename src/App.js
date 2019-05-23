import React, {Component} from 'react';
import './App.css';
import Validatoin from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  
state = {
  userInput: '' ,
  stringLength: 0,
}

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
    this.setState({stringLength: event.target.value.length})
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split(''); // get array of char
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
    
  }

  render() {

    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character={ch} key={index}
              clicked={this.deleteCharHandler(index)}/>
    }); //we can firs define this char-list here. Remember to use map function on list.
        /*
          The map() method creates a new array with the results of calling a function
           for every array element.
          The map() method calls the provided function once for each element 
          in an array, in order.
          Note: map() does not execute the function for array elements without values.
          Note: map() does not change the original array.

          split() function is used to split the given string into array of strings by 
          separating it into substrings using a specified separator provided in the argument.
        */

    return (
      <div className="App">
        <div className="input">
          <input type="text"  
          onChange={this.inputChangedHandler} 
          value={this.state.userInput}/>

         <p>Your input string length is: {this.state.stringLength}</p>
         <Validatoin inputLength={this.state.stringLength}/>

         {charList}
       
        </div>
      
      </div>
    );
  }
}

export default App;
