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
  
  calculateScore = () => {
    this.setState({ count: this.state.count + 1 });

    if (this.state.count === 2 || this.state.score === 12) {
      this.setState({ count: 0 });
      this.setState({ totalScore: this.state.totalScore + this.state.score });
      this.setState({ score: 0 })
    } else {
      this.setState({ score: this.state.score + 1 });
    }

    this.randomizeCharacters();
  };

  randomizeCharacters = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState( {characters:a} );
}

  render () {
    return (
      <Wrapper>
        <Title>Score: {this.state.score} || Total Score: {this.state.totalScore} </Title>
        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          image={character.image}
          calculateScore={this.calculateScore}
        />
        ))}
      </Wrapper>
    );
  }
  
}

export default App;
