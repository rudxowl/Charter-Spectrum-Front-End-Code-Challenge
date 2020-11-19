
import React, { Component } from 'react';
import TableRow from './TableRow.js';



export class Table extends Component {  
    constructor(props) {
    super(props);
    this.states=[];
    this.genres=[];
  }
 
    //filter input change handler
    handleOnChange = (e) => {
    this.props.handleSearchEvents(e.target.value, e.target.name);
  };
   

  render() {    
    let rows = [];     
    let pageRows =[];
      
    //push data to table rows
    this.props.data.forEach((dataObj, index) => {      
      rows.push(        

        <TableRow          
           key={dataObj.index}          
           name={dataObj.name}          
           city={dataObj.city}          
           state={dataObj.state}          
           phone={dataObj.phone}           
           genre={dataObj.genre}/>
      );    
    });

    //specify rows on the current page
    pageRows=rows.slice(10*(this.props.page-1),10*this.props.page);     

    //delete redundant data for filter options
    this.states = [...new Set(this.props.data.map(x=>x.state))];
    this.genres = [...new Set(this.props.data.map(x=>x.genreSpe))];
  

    return (      
      <table>        
        <thead>          
          <tr>            
            <th>Name   
                         
                </th>            
            <th>City{this.props.state}</th>          
            <th>State         
            <div>
            <select type="text" name='state' value={this.props.state} onChange={this.handleOnChange}>
                 <option selected="selected" value="">All</option>
                {this.states.map((value, index) => (
                <option key={index} value={value}>{value}</option>
                ))}
                </select>   
                </div>
          </th>  
            <th>Phone</th>       
            <th>Genre
            <div>
            <select type="text" name='genre' value={this.props.genre} onChange={this.handleOnChange}>
            <option selected="selected" value="">All</option>
              {this.genres.map((value, index) => (
                <option key={index} value={value}>{value}</option>
                ))}
                </select>  
              </div> 
          </th>         
          </tr>
        </thead>        
        <tbody>        
          {pageRows}       
        </tbody>     
      </table>    
    ) 
  }
}

export default Table