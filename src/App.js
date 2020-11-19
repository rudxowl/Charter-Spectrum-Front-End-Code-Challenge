import React from 'react';
import Table from './components/Table.js';
import SearchBar from './components/SearchBar.js'
import './App.css'



class App extends React.Component {
  constructor(props) {
      super(props);
      this.data = [];
      this.state = {
        state: '',
        genre: '',
        city: '',
        search:'',
        name:'',
        isLoading: true,
        page:1
        
      };

  }

  componentDidMount() {
    //Fetch data from API
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", { headers: {Authorization: "Api-Key q3MNxtfep8Gt", },})
      .then(response => response.json())
      .then(data =>{

        //Data Sorting
        data.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

        //organize and store the sorted data
        let array = [];
        for (let i = 0; i < data.length; i++) {             
          let entry = {};      
          entry.name = data[i].name;          
          entry.city = data[i].city;          
          entry.state = data[i].state;          
          entry.phone = data[i].telephone;                
          entry.genre = data[i].genre;

          //split genre
          for(let j = 0; j<data[i].genre.split(',').length;j++){
           entry.genreSpe = data[i].genre.split(',')[j];
          }
          
          array[i] = entry;       
        } 
     
        this.data = array;       
        this.setState({          
          isLoading: false,
        });      
      })   
      .catch(error => this.setState({ error, isLoading: false }));
  }

  //update search value
  handleSearchEvents = (value, name) => {
      this.setState({ [name]: value });
  }

  handleClearButton = (name) => {
      this.setState({ [name]: '' });
  }
  
  //update current page
  updatePage = (e) => {
    this.setState({[e.target.name]:e.target.value});
  };
  

  render() {
    //fitering Data
    const filteredData = this.data.filter((dataObj)=>
    ((dataObj.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)||
    (dataObj.genre.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)||
    (dataObj.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1))&&
    ((dataObj.state.toLowerCase().indexOf(this.state.state.toLowerCase()) !== -1)&&
    (dataObj.genre.toLowerCase().indexOf(this.state.genre.toLowerCase()) !== -1))
    );

    //storing pages
    this.pages=Math.ceil(filteredData.length/10)

    //Creating Page Buttons
    const items =[];
    for(let i =1; i<= this.pages;i++){
      items.push(
         <option key={i} value={i}>{i}</option>
        
      );
    }


    return (
      <div className="App">
        <h1>Restaurants </h1>
        
        <SearchBar
          search={this.state.search}
          handleSearchEvents={this.handleSearchEvents}
          handleClearButton={this.handleClearButton} 
          />
          
        <div class='pagebutton'>
        <label id='pagelabel' for="pagebutton">Page:</label> 
        <select id='pagebutton' type="text" name='page' value={this.props.page} onChange={this.updatePage}>
          {items} 
        </select>
        </div>

        <Table
          genre={this.state.genre}
          state={this.state.state}
          data={filteredData} 
          originalData={this.data}
          handleSearchEvents={this.handleSearchEvents}
          pages={this.pages}
          page={this.state.page}
          />   
      </div>
    )
  }
}





export default App;