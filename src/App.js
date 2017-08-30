import React from 'react'
import { Layout } from './components/Layout'
import { test } from './testdata'
import * as Rx from 'rxjs'
export class App extends React.Component {
  state = {
    cards: test.plecoflash.cards,
    card: randomize(),
    challenge: randomChallenge(),
  }
  componentDidMount() {
    Rx.Observable
      .fromEvent(document, 'click')
      .subscribe(x => this.setState({ challenge: randomChallenge() }))

    const one = this.state.card
    console.log('x', one)
    console.log('headword', one.headword[0]['#text'])
    console.log('pinyin', one.pron['#text'])
    console.log('def', one.defn)
  }
  render() {
    return <Layout card={this.state.card} challenge={this.state.challenge} />
  }
}
const randomize = () =>
  test.plecoflash.cards.card[
    Math.ceil(Math.random() * test.plecoflash.cards.card.length - 1)
  ].entry

const randomChallenge = () => {
  const card =
    test.plecoflash.cards.card[
      Math.ceil(Math.random() * test.plecoflash.cards.card.length - 1)
    ].entry

  return {
    headword: headword(card),
    pinyin: pinyin(card),
    definition: definition(card),
    one: 'dog',
    two: 'fox',
    three: '123',
  }
}
const headword = card => card.headword[0]['#text']
const pinyin = card => card.pron['#text']
const definition = card => card.defn
