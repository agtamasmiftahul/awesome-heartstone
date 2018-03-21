import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardList from '../actions/get_card_list';
import CardList from './CardList';

class App extends Component {
  componentDidMount() {
    this.props.getCardList();
  }

  render() {
    return (
      <div className="App container">
        <div className="card-container">
          <div className="columns">
            <div className="column col-md-6">
              <CardList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    heroes: state.heroes,
  }
}

//connects redux actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCardList: getCardList
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
