import React from 'react';
import './App.css'

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: [],
  }

  componentDidMount() {
    const config = {
      headers: {
        'X-Mashape-Key': 'lN2bpG1T3RmshWn88IrodpWtsa0Qp1GGyGsjsnNEVMi5LyyOG7',
        'Accept': 'application/json'
      }
    }

    axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/sets/Classic`, config)
      .then(res => {
        const persons = res.data;
        this.setState({ persons: persons });
        console.log(persons);
      })
  }

  render() {
    return (
      <div>
      <ul>
        {this.state.persons.map(person =>
          <div>
            <img className='rotateRightImg' src='images/cardBack.gif' />
            <img className='rotateLeftImg' src={person.img} key={person.cardId}/>
            <p>{person.name}</p>
          </div>
        )}
      </ul>
    </div>
    )
  }
}
