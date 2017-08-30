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
  const rA = Math.ceil(Math.random() * 3)
  const rB = Math.ceil(Math.random() * 3)
  const arr = [headword(card), pinyin(card), definition(card)]
  const correctAnswer = arr[rB - 1]
  return {
    headword: rB === 1 ? '???' : headword(card),
    pinyin: rB === 2 ? '???' : pinyin(card),
    definition: rB === 3 ? '???' : definition(card),
    one: rA === 1 ? correctAnswer : 'dog',
    two: rA === 2 ? correctAnswer : 'fox',
    three: rA === 3 ? correctAnswer : '123',
  }
}
const whatAreWeTesting = () => {
  //1-3
  const rand = Math.ceil(Math.random() * 3)
  if (rand === 1) return 'headword'
  if (rand === 2) return 'pinyin'
  if (rand === 3) return 'definition'
}
const headword = card => card.headword[0]['#text']
const pinyin = card => card.pron['#text']
const definition = card => card.defn
