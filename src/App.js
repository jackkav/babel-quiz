import React from 'react'
import styled from 'styled-components/native'
import { Layout } from './components/Layout'
import { test } from './testdata'
export class App extends React.Component {
  state = { cards: test.plecoflash.cards }
  componentDidMount() {
    console.log('x', this.state.cards)
  }
  render() {
    return <Layout cards={this.state.cards} />
  }
}
