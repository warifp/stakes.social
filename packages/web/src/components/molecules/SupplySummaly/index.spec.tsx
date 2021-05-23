import React from 'react'
import { render } from '@testing-library/react'
import { SupplySummary } from '.'
import 'src/__mocks__/window/matchMedia.mock'
import BigNumber from 'bignumber.js'

describe(`${SupplySummary.name}`, () => {
  test('Snapshot', () => {
    const component = render(<SupplySummary apy={new BigNumber(1)} annualSupplyGrowthRatio={new BigNumber(1)} />)
    const tree = component.baseElement
    expect(tree).toMatchSnapshot()
  })
})
