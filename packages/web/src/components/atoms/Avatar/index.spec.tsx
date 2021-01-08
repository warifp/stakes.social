import React from 'react'
import { render } from '@testing-library/react'
import { Avatar } from '.'
import 'src/__mocks__/window/matchMedia.mock'

jest.mock('src/fixtures/dev-kit/hooks')
jest.mock('@dev/graphql')

describe(`${Avatar.name}`, () => {
  test('Snapshot', () => {
    const url = 'http://dummy.org'
    const component = render(<Avatar url={url} size="20" />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
