import React from 'react';


class App extends React.Component {
  state = {
    isLoading: true,
    users: [],
    error: null
  };

  fetchUsers() {
    fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants", { headers: {Authorization: "Api-Key q3MNxtfep8Gt", },})
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchUsers();
  }
  render() {
    const { isLoading, users, error } = this.state;
    return (
      <React.Fragment>
        <h1>Restaurants</h1>
        {error ? <p>{error.message}</p> : null}
        {!isLoading ? (
          users.map(user => {
            const { username, name, city, state, phone_number, genre } = user;
            return (
              <div key={username}>
                <p>Name: {name}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Phone: {phone_number}</p>
                <p>Genre: {genre}</p>
                <hr />
              </div>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </React.Fragment>
    );
  }
}


export default App;
