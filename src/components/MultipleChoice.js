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

const Middle = styled.View`
  flex: 4;
  justify-content: flex-start;
`
const Challenge = styled.Text`
  padding: 10px 10px 10px 10px;
  font-size: 40;
  color: white;
  text-align: center;
`
const Clue = styled.Text`
  padding: 10px 10px 10px 10px;
  color: white;
  text-align: center;
`
