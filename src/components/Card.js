import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardListByName from '../actions/get_card';

class CardList extends Component {
  componentDidMount() {
    this.props.getCardListByName(this.props.match.params.name);
  }

  renderHero() {
    if(this.props.hero) {
      return this.props.hero.map(r => {
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
        <h2>Card:</h2>
        {this.renderHero()}
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    hero: state.hero
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardListByName: getCardListByName
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
