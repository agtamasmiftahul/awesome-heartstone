import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardList from '../actions/get_card_list';
import CardList from './CardList';
import { Grid, Image } from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    this.props.getCardList();
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          <Image className='banner' src='images/banner-desktop.png' fluid/>
        </Grid.Column>
        <CardList />
      </Grid>
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
