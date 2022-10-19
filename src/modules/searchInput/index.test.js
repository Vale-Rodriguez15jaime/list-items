import SearchInput from './index'
import { fireEvent, render, screen } from '@testing-library/react'

describe('SearchInput', () => {
  let routerSpy

  beforeEach(() => {
    routerSpy = jest.spyOn(Router, 'push')
  })

  it('Update input', () => {
    const { getByDisplayValue } = render(<SearchInput />)
    const input = getByDisplayValue('')
    fireEvent.change(input, { target: { value: 'gino' } })
    expect(screen.getByDisplayValue('gino')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: 'canis' } })
    expect(screen.getByDisplayValue('canis')).toBeInTheDocument()
    fireEvent.change(input, { target: { value: '43' } })
    expect(screen.getByDisplayValue('43')).toBeInTheDocument()
  })
})
