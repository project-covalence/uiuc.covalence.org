// @flow
import React, { Component } from 'react'
import type { ColorsProps } from './../types'

export default class StuffList extends Component<ColorsProps> {
  render() {
    const { colors } = this.props
    return colors.length > 0 ? (
      colors.map(color => <div key={color}>{color}</div>)
    ) : (
      <div>No Colors</div>
    )
  }
}
