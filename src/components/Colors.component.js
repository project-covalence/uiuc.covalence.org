// @flow
import React from 'react'
import type { ColorsProps } from './../types'

export default function Colors({ colors }: ColorsProps) {
  return colors.map(color => <div key={color}>{color}</div>)
}
