import React from 'react'
import styled from 'styled-components/native'
import { Button } from './Button'
export const Layout = ({ card }) => (
  <Root>
    <Left>
      <GreenText>对</GreenText>
      <AnyText>对</AnyText>
    </Left>

    <Middle>
      <Challenge>电</Challenge>
      <Clue>dian</Clue>
      <Clue>???</Clue>
      <Button title="dog" />
      <Button title="cat" />
      <Button title="electricity" />
    </Middle>

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
const Middle = styled.View`
  flex: 4;
  justify-content: flex-start;
`
const Right = styled.View`flex: 1;`
const AnyText = styled.Text`padding: 10px 10px 10px 10px;`
const Challenge = styled.Text`
  padding: 10px 10px 10px 10px;
  font-size: 40;
`
const Clue = styled.Text`padding: 10px 10px 10px 10px;`
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
