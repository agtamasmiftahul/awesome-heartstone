import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Grid, Card, Image, Divider } from 'semantic-ui-react'

class CardDetail extends Component {
  renderHeroes() {
    if(this.props.hero) {
      return this.props.hero.map(r => {
        return (
          <Grid.Column>
            <Card className='borderless' key={r.cardId} fluid centered>
              <Grid centered columns={1} padded>
                <Grid.Column>
                  <Card.Content textAlign='center'>
                    <Image className='rotateRightImgDetail' src='images/cardBack.gif' size='medium' />
                      <Image className='rotateLeftImgDetail' src={r.img} size='medium' />
                  </Card.Content>
                </Grid.Column>
                <Grid.Column>
                  <Card.Content textAlign='center'>
                    <p className='title'>{r.name}</p>
                    <Image src='images/logo-sm.png' size='mini' />
                    <Divider section />
                    <p className='description'>
                      <b>
                        Type:
                      </b>
                      &nbsp;{r.type}
                    </p>
                    <p className='description'>
                      <b>
                        Class:
                      </b>
                      &nbsp;{r.playerClass}
                    </p>
                    <p className='description'>
                      <b>
                        Rarity:
                      </b>
                      &nbsp;{r.rarity}
                    </p>
                    <p className='description'>
                      <b>
                        Set:
                      </b>
                      &nbsp;{r.cardSet}
                    </p>
                    <p className='description'>
                      <b>
                        Race:
                      </b>
                      &nbsp;{r.race}
                    </p>
                    <p className='description'>
                      <b>
                        Crafting Cost:
                      </b>
                      &nbsp;{r.cost}
                    </p>
                    <p className='description'>
                      <b>
                        Attack:
                      </b>
                      &nbsp;{r.attack}
                    </p>
                    <p className='description'>
                      <b>
                        Health:
                      </b>
                      &nbsp;{r.health}
                    </p>
                  </Card.Content>
                </Grid.Column>
              </Grid>
            </Card>
          </Grid.Column>
        );
      });
    }
  }
  render() {
    return (
      <Grid centered columns={1} padded>
        {this.renderHeroes()}
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

export default connect(mapStateToProps, null)(CardDetail)
