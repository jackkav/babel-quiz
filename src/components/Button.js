import React from 'react'
import styled from 'styled-components/native'
export const Button = ({ title }) => (
  <TouchView>
    <Touch>
      <AnyText>{title}</AnyText>
    </Touch>
  </TouchView>
)
const Touch = styled.TouchableOpacity``
const TouchView = styled.View`
  background-color: gray;
  border-radius: 5;
  margin: 10px 10px 10px 10px;
`
const AnyText = styled.Text`
  color: white;
  text-align: center;
  padding: 10px 10px 10px 10px;
`
