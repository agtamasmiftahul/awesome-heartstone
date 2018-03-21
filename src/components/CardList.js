import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import { Grid, Card, Image, Header, Divider } from 'semantic-ui-react'

class CardList extends Component {
  renderHeroes() {
    if(this.props.heroes) {
      return this.props.heroes.map(r => {
        return (
          <Grid.Column>
            <Card className='borderless' key={r.cardId} fluid centered>
              <Card.Content textAlign='center'>
                <Image className='rotateRightImg' src='images/cardBack.gif' size='small' />
                <Image className='rotateLeftImg' src={r.img} size='small' />
              </Card.Content>
              <Card.Content extra textAlign='center'>
                <Image src='images/logo-sm.png' size='mini' />
                <Header size='medium'>{r.name}</Header>
              </Card.Content>
            </Card>
          </Grid.Column>
        );
      });
    }
  }
  render() {
    return (
      <Grid centered columns={3} padded>
        <p className='title'>Cards</p>
        <Header textAlign='center' size='medium'>A fast-paced strategy card game for everyone.</Header>
        <Divider section />
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

export default connect(mapStateToProps, null)(CardList);
