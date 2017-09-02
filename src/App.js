import React from 'react'
import { Layout } from './components/Layout'
import { test } from './testdata'
import * as Rx from 'rxjs'
const convert = require('pinyin-convert')

export class App extends React.Component {
  state = {
    cards: test.plecoflash.cards,
    card: randomize(),
    challenge: randomChallenge(),
  }
  componentDidMount() {
    const clicks$ = Rx.Observable.fromEvent(document, 'click')

    // const res$ = Rx.Observable.from(
    //   fetch('https://jsonplaceholder.typicode.com/users/0').then(res =>
    //     res.json(),
    //   ),
    // )
    // const fetchOnClick$ = clicks$.map()
    const cards$ = Rx.Observable
      .from(test.plecoflash.cards.card)
      .map(x => mapToCard(x))
    // .subscribe(x => this.setState({ challenge: x }))
    const pinyin$ = cards$.flatMap(x => {
      // console.log('do network request', x)
      return Rx.Observable.fromPromise(convert(x.pinyin))
    })
    const cardsWithPinyin$ = Rx.Observable
      .zip(cards$, pinyin$, (c, p) => ({
        ...c,

        pinyin: p,
      }))
      .subscribe(x => this.setState({ challenge: x }))

    // cardsWithPinyin$.subscribe(x =>
    //   this.setState({ challenge: randomChallenge() }),
    // )
    // Rx.Observable
    //   .from(test.plecoflash.cards.card)
    //   .map(x => ({
    //     definition: x.entry.defn,
    //     pinyin: x.entry.pron['#text'],
    //     headword: x.entry.headword[0]['#text'],
    //   }))
    // cardsWithPinyin$.subscribe(x => console.log(x))
    // const one = this.state.card
    // console.log('x', one)
    // console.log('headword', one.headword[0]['#text'])
    // console.log('pinyin', one.pron['#text'])
    // console.log('def', one.defn)
  }
  render() {
    return <Layout card={this.state.card} challenge={this.state.challenge} />
  }
}
const randomize = () =>
  test.plecoflash.cards.card[
    Math.ceil(Math.random() * test.plecoflash.cards.card.length - 1)
  ].entry

const randomChallenge = async () => {
  const c =
    test.plecoflash.cards.card[
      Math.ceil(Math.random() * test.plecoflash.cards.card.length - 1)
    ]
  const card = mapToCard(c)
  const rA = Math.ceil(Math.random() * 3)
  const rB = Math.ceil(Math.random() * 3)
  const arr = [card.headword, card.pinyin, card.definition]
  const correctAnswer = arr[rB - 1]
  console.log('cdcd', correctAnswer)
  return {
    headword: rB === 1 ? '???' : arr[0],
    pinyin: rB === 2 ? '???' : arr[1],
    definition: rB === 3 ? '???' : arr[2],
    one: rA === 1 ? correctAnswer : 'dog',
    oneCorrect: rA === 1,
    two: rA === 2 ? correctAnswer : 'fox',
    twoCorrect: rA === 2,
    three: rA === 3 ? correctAnswer : '123',
    threeCorrect: rA === 3,
  }
}
const mapToCard = x => ({
  definition: x.entry.defn,
  pinyin: x.entry.pron['#text'],
  headword: x.entry.headword[0]['#text'],
})
const headword = card => card.headword[0]['#text']
const pinyin = card => card.pron['#text']

const definition = card => card.defn
