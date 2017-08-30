import React from 'react'
import styled from 'styled-components/native'

import { Button } from './Button'
export const MultipleChoice = ({ challenge }) => (
  <Middle>
    <Challenge>{challenge.headword}</Challenge>
    <Clue>{challenge.pinyin}</Clue>
    <Clue>{challenge.definition}</Clue>
    <Button title={challenge.one} />
    <Button title={challenge.two} />
    <Button title={challenge.three} />
  </Middle>
)
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
const Middle = styled.View`
  flex: 4;
  justify-content: flex-start;
`
const AnyText = styled.Text`padding: 10px 10px 10px 10px;`
const Challenge = styled.Text`
  padding: 10px 10px 10px 10px;
  font-size: 40;
`
const Clue = styled.Text`padding: 10px 10px 10px 10px;`
