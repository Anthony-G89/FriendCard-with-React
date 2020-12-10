import React, { Component } from 'react';
import FriendCard from "../src/components/FriendCard";
import Title from "../src/components/Title";
import Container from "../src/components/Container";
import friends from "../src/friends.json";
import './App.css';


class App extends Component {

  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setstate({ friends: friends });
  }



  render() {

    return (

        <Container>
        <Title>Cartoon Characters</Title>

        {this.state.friends.map(apples => (
          <FriendCard
          removeFriend={this.removeFriend}
          id={apples.id}
          key={apples.id}
          name={apples.name}
          image={apples.image}
          occupation={apples.occupation}
          location={apples.location}
          />
        ))}

        </Container>

    );
  }
}

export default App;
