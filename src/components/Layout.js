import React from 'react'
import styled from 'styled-components/native'
import { MultipleChoice } from './MultipleChoice'
export const Layout = ({ challenge }) => (
  <Root>
    <Left>
      <GreenText>对</GreenText>
      <AnyText>对</AnyText>
    </Left>

    <MultipleChoice challenge={challenge} />

    <Right>
      <RedText>错</RedText>
      <AnyText>错</AnyText>
    </Right>
  </Root>
)
const Root = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: black;
  color: white;
  text-align: center;
`
const Left = styled.View`flex: 1;`

const Right = styled.View`flex: 1;`
const AnyText = styled.Text`padding: 10px 10px 10px 10px;`

const RedText = styled.Text`
  padding: 10px 10px 10px 10px;
  color: red;
  font-size: 30;
`
const GreenText = styled.Text`
  padding: 10px 10px 10px 10px;
  color: green;
  font-size: 30;
`
