import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import getCardList from '../actions/get_card_list'
import CardList from './CardList'
import CardListMobile from './CardListMobile'
import CardListTablet from './CardListTablet'
import MenuBar from './Menu'
import MenuBarMobile from './MenuMobile'
import InfoPanel from './Info'
import InfoPanelMobile from './InfoMobile'
import { Grid, Image, Header, Divider } from 'semantic-ui-react'

class App extends Component {
  componentDidMount() {
    this.props.getCardList()
  }

  render() {
    return (
      <Grid centered columns={1}>
        <Grid.Column only='computer'>
          <InfoPanel />
          <MenuBar />
          <Image className='banner' src='images/banner-desktop.png' fluid/>
        </Grid.Column>
        <Grid.Column only='tablet'>
          <InfoPanel />
          <MenuBar />
          <Image className='banner' src='images/banner-desktop.png' fluid/>
        </Grid.Column>
        <Grid.Column only='mobile'>
          <InfoPanelMobile />
          <MenuBarMobile />
          <Image src='images/banner-mobile.png' fluid/>
        </Grid.Column>
        <Grid.Column only='computer'>
          <p className='title'>Cards</p>
          <Header textAlign='center' size='medium'>A fast-paced strategy card game for everyone.</Header>
          <Divider section />
          <CardList />
        </Grid.Column>
        <Grid.Column textAlign='center' only='tablet'>
          <Header textAlign='center' size='medium'>A fast-paced strategy <br/> card game for everyone.</Header>
          <p className='title'>Cards</p>
          <Divider section />
          <CardListTablet />
        </Grid.Column>
        <Grid.Column textAlign='center' only='mobile'>
          <Header textAlign='center' size='medium'>A fast-paced strategy <br/> card game for everyone.</Header>
          <p className='title'>Cards</p>
          <Divider section />
          <CardListMobile />
        </Grid.Column>
        <Grid.Column className='footer' only='computer'>
          <Image src='images/footer-desktop.png' />
        </Grid.Column>
        <Grid.Column className='footer' only='tablet'>
          <Image src='images/footer-desktop.png' />
        </Grid.Column>
        <Grid.Column only='mobile'>
          <Image src='images/footer-mobile.png' fluid/>
        </Grid.Column>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
