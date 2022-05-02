import React from "react";
// import axios from "axios";

// TODO:
// need to figure out authentication for poe api

export class AccountCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
      league: []
    };
  }

  componentDidMount() {
    // axios way of fetching data
    // axios.get(`https://api.pathofexile.com/league`).then((res) => {
    //   // const characterSheet = res.data;
    //   const currentLeague = res.data;
    //   console.log(currentLeague);
    //   this.setState({ league: res.data });
    // });

    // windows.fetch way of getting api data
    // this call works BUT I do not have authorization to access it.
    // https://reactjs.org/docs/faq-ajax.html
    // fetch w auth doc: https://learn.co/lessons/javascript-fetch
    fetch("https://pathofexile.com/oauth/authorize", {
      method: 'GET',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Authorization': `${process.env.REACT_APP_POE_SECRET}`,
        'Content-Type': 'application/json'
      }
    })
      .then(
        (res) => {
          this.setState({
            league: res.data
          })
        },
        (error) => {
          this.setState({
            error
          })
        }
      )

  }

  render() {
    return (
      <></>
      // <ul>
      //   {this.state.persons.map((person) => (
      //     <li key={person.id}>{person.name}</li>
      //   ))}
      // </ul>
    );
  }
}

export default AccountCharacter;