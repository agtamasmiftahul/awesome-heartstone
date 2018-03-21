import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getCardListByName from '../actions/get_card';
import Card from './Card';
import MenuBar from './Menu'
import InfoPanel from './Info'
import { Grid } from 'semantic-ui-react'

class Detail extends Component {
  componentDidMount() {
    this.props.getCardListByName(this.props.match.params.name);
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column>
          <InfoPanel />
          <MenuBar />
        </Grid.Column>
        <Card />
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
