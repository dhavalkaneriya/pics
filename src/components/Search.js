import React, { Component } from "react";

export default class Search extends Component {
  state = { term: "" };

  onInputChange = evt => {
    this.setState({
      term: evt.target.value
    });
  };

  // https://stephengrider.github.io/playgrounds/

  /* example for this

  step 1 :
  class Car {

  setSound(sound){
  this.sound = sound;
  }
  
  drive(){
  return this.sound;
  }
}

const car = new Car();
car.setSound('vmmmm');
car.drive();

step 2 :
const truck = {
	sound: 'hmmmm',
  driveMYTruck: car.drive
}

truck.driveMYTruck()

step 3 :
const drive = car.drive;

drive();

  */
  onSubmitSearch = event => {
    event.preventDefault();

    const { onSearchSubmit } = this.props;
    const { term } = this.state;
    // console.log(this.state.term);
    onSearchSubmit(term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitSearch}>
          <div className="field">
            <label>Search Image</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
