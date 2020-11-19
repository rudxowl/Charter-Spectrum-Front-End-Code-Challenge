import React,{ Component } from 'react';


export class SearchBar extends Component {
    constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  //searchbar input change handler
  handleOnChange = (e) => {
  this.props.handleSearchEvents(e.target.value, e.target.name);
  };
 
 //clear button handler
  handleClear = (e) => {
  this.props.handleClearButton(e.target.name);
  };
   
  render() {
      return (
      <form>
        <input
          class='searchinput'
          type="text"
          name='search'
          ref={this.input}
          onChange={this.handleOnChange}
          placeholder='search'/>
          <button class='clearbutton'onClink={this.handleClear}>Clear</button>
      </form>
      )
  }
}

export default SearchBar