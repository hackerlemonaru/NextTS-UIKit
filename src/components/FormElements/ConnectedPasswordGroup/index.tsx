import { useField } from 'formik'
import * as React from 'react'
import styled from 'styled-components'
import {
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  borderWidth,
  BorderWidthProps,
  color,
  ColorProps,
  space,
  SpaceProps,
} from 'styled-system'

export type StyledInputProps = SpaceProps &
  ColorProps &
  BorderWidthProps &
  BorderColorProps &
  BorderRadiusProps

export const StyledInput = styled.input<StyledInputProps>`
  ${space};
  ${color};
  ${borderWidth};
  ${borderColor};
  ${borderRadius};
  height: 100%;
`

StyledInput.defaultProps = {
  color: 'text',
  borderWidth: 1,
  bg: 'background',
