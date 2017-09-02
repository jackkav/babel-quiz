import React from 'react'
import { Layout } from './components/Layout'
import { test } from './testdata'
import * as Rx from 'rxjs'
import convert from 'pinyin-convert'
const filteredDictionary = test.plecoflash.cards.card.filter(
  x => x.entry.headword[0]['#text'].length === 1,
)
export class App extends React.Component {
  state = {
    challenge: {},
  }
  componentDidMount() {
    const clicks$ = Rx.Observable.fromEvent(document, 'click')

    const cards$ = Rx.Observable.from(filteredDictionary).map(x => mapToCard(x))

    const accentedPinyin$ = cards$.mergeMap(x => {
      return Rx.Observable.fromPromise(convert(x.pinyin))
    })
    const cardsWithAccentedPinyin$ = Rx.Observable.zip(
      cards$,
      accentedPinyin$,
      (c, p) => ({
        ...c,
        pinyin: p,
      }),
    )
    const challenges$ = cardsWithAccentedPinyin$.map(x => mapToChallenge(x))
    challenges$.subscribe(x => this.setState({ challenge: x }))

    challenges$.subscribe(x => console.log(x))
  }
  render() {
    return <Layout challenge={this.state.challenge} />
  }
}

const mapToCard = x => ({
  definition: x.entry.defn,
  pinyin: x.entry.pron['#text'],
  headword: x.entry.headword[0]['#text'],
})
const mapToChallenge = card => {
  const challengeTypes = [card.headword, card.pinyin, card.definition]
  const selectButtonForCorrectAnswer = Math.ceil(Math.random() * 3)
  const selectChallengeType = Math.ceil(Math.random() * 3)
  const correctAnswer = challengeTypes[selectChallengeType - 1]
  return {
    correctAnswer,
    headword: blankOut(challengeTypes, selectChallengeType, 1),
    pinyin: blankOut(challengeTypes, selectChallengeType, 2),
    definition: blankOut(challengeTypes, selectChallengeType, 3),
    one: isCorrect(correctAnswer, selectButtonForCorrectAnswer, 1),
    two: isCorrect(correctAnswer, selectButtonForCorrectAnswer, 2),
    three: isCorrect(correctAnswer, selectButtonForCorrectAnswer, 3),
  }
}
const blankOut = (challengeTypes, selectedType, type) => {
  return selectedType === type ? '???' : challengeTypes[type - 1]
}

const isCorrect = (correctAnswer, selectedButton, button) => {
  return selectedButton === button ? correctAnswer : 'dog'
}
