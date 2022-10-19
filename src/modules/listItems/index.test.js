import ListItems from './index'
import { render } from '@testing-library/react'
import { createMockRouter } from '../../utils/createMockRouter'
import { RouterContext } from 'next/dist/shared/lib/router-context'

describe('ListItems', () => {
  it('renders query search gg', () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ query: { search: 'gg' } })}>
        <ListItems />;
      </RouterContext.Provider>
    )
    expect(getByTestId('listSearch-gg')).toBeInTheDocument()
  })
  it('renders query search canis', () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ query: { search: 'canis' } })}>
        <ListItems />;
      </RouterContext.Provider>
    )
    expect(getByTestId('listSearch-canis')).toBeInTheDocument()
  })
  it('renders search empty', () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ query: { search: '' } })}>
        <ListItems />;
      </RouterContext.Provider>
    )
    expect(getByTestId('listSearch-')).toBeInTheDocument()
  })
  it('renders query search undefined', () => {
    const { getByTestId } = render(
      <RouterContext.Provider value={createMockRouter({ query: {} })}>
        <ListItems />;
      </RouterContext.Provider>
    )
    expect(getByTestId('listSearch-')).toBeInTheDocument()
  })
})
