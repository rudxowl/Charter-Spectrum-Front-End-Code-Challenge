import React, { Component } from 'react';

export class TableRow extends Component {  
  render() {    
    return (      
      <tr>        
        <td>{this.props.name}</td>
        <td>{this.props.city}</td>
        <td>{this.props.state}</td>
        <td>{this.props.phone}</td>
        <td>{this.props.genre}</td>
      </tr>
    )
  }
}

export default TableRow