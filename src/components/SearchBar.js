import React,{ Component } from 'react';

export class SearchBar extends Component {
    constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleOnChange = (e) => {
  this.props.handleSearchEvents(e.target.value, e.target.name);
  };
 
  handleClear = (e) => {
  e.preventDefault();
  this.input="";
  };
   
  render() {
      return (
      <form>
        <input
          type="text"
          name='search'
          ref={this.input}
          onChange={this.handleOnChange}
          placeholder='search...'/>
          <button onClink={this.handleClear}>Clear</button>
      </form>
      )
  }
}

export default SearchBar