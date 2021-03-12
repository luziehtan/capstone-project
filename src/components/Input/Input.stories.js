import React from 'react'
import Input from './Input.js'

export default {
  title: 'Input-Component',
  component: Input,
}

export const DefaultInput = () => (
  <Input placeholder="Enter new movie" type="text" />
)
