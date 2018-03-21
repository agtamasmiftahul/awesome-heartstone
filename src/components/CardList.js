import React, { Component } from 'react';
import {connect} from 'react-redux';

class CardList extends Component {
  renderHeroes() {
    if(this.props.heroes) {
      return this.props.heroes.map(r => {
        return (
          <div key={r.cardId} className="card">
            <div className="card-body">
              <img src={r.img} alt=""/>
            </div>
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <h2>Card List:</h2>
        {this.renderHeroes()}
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(CardList);
