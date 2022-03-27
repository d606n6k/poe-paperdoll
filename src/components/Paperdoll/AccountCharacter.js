import React, {Class} from "React";
import axios from "axios";
// Todo: Need to debug why this breaks app when imported into another compoent. Also need to implement API call once PoE team gets back to me with active API keys
export class AccountCharacter extends React.Component {
  state = {
    character: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const characterSheet = res.data;
      console.log(characterSheet);
      this.setState({ characterSheet });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default AccountCharacter;