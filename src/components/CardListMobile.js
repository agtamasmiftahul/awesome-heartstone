import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Grid, Card, Image, Header } from 'semantic-ui-react'

class CardListMobile extends Component {
  renderHeroes() {
    if(this.props.heroes) {
      return this.props.heroes.map(r => {
        return (
          <Grid.Column key={r.cardId}>
            <Card className='borderless' fluid centered>
              <Card.Content textAlign='center'>
                <Image className='rotateRightImgMobile' src='images/cardBack.gif' size='mini' />
                <Link to={r.cardId}>
                  <Image className='rotateLeftImgMobile' src={r.img} size='mini' />
                </Link>
              </Card.Content>
              <Card.Content extra textAlign='center'>
                <Image src='images/logo-sm.png' size='mini' />
                <Link to={r.cardId}>
                  <Header size='medium'>{r.name}</Header>
                </Link>
              </Card.Content>
            </Card>
          </Grid.Column>
        );
      });
    }
  }

  render() {
    return (
      <Grid centered columns={2} padded>
        {this.renderHeroes()}
      </Grid>
    );
  }
}

//connects root reducer to props
function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(CardListMobile)
