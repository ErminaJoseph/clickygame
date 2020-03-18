import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters,
    totalScore: 0,
    score: 0,
    count: 0
  }
  
  // gameLogic = id => {
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   this.setState({ friends });
  // };

  render () {
    return (
      <Wrapper>
        <Title>Score: {this.state.score} || Total Score: {this.state.totalScore} </Title>
        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          image={character.image}
        />
        ))}
      </Wrapper>
    );
  }
  
}

export default App;
