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

    this.setstate({ friends })
  }



  render() {

    return (

      <div>
        {this.state.friends.map(apples => (
          <FriendCard
          name={apples.name}
          image={apples.image}
          occupation={apples.occupation}
          location={apples.location}

          />

        ))}


      </div>
    );



  }
}

export default App;
