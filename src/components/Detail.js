import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getCardListByName from '../actions/get_card'
import Card from './Card'
import CardTablet from './CardTablet'
import CardMobile from './CardMobile'
import MenuBar from './Menu'
import MenuBarMobile from './MenuMobile'
import InfoPanel from './Info'
import InfoPanelMobile from './InfoMobile'
import { Grid } from 'semantic-ui-react'

class Detail extends Component {
  componentDidMount() {
    this.props.getCardListByName(this.props.match.params.name)
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column only='computer'>
          <InfoPanel />
          <MenuBar />
        </Grid.Column>
        <Grid.Column only='tablet'>
          <InfoPanel />
          <MenuBar />
        </Grid.Column>
        <Grid.Column only='mobile'>
          <InfoPanelMobile />
          <MenuBarMobile />
        </Grid.Column>
        <Grid.Column only='computer'>
          <Card />
        </Grid.Column>
        <Grid.Column only='tablet'>
          <CardTablet />
        </Grid.Column>
        <Grid.Column only='mobile'>
          <CardMobile />
        </Grid.Column>
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail)
