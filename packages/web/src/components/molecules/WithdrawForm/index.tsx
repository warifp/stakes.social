import React from 'react'
import BigNumber from 'bignumber.js'
import { Button, Alert } from 'antd'
import styled from 'styled-components'

interface Props {
  label: 'Stakers' | 'Creators'
  amount?: BigNumber
  onSubmitWithdraw: () => void
}

const Wrap = styled.div``
const Form = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`
const Statistic = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const WithdrawForm = ({ amount, label, onSubmitWithdraw }: Props) => {
  return (
    <Wrap>
      <p>Withdraw {label} Reward</p>
      <Form>
        <Statistic>{amount ? amount.dp(5).toNumber() : 0} DEV</Statistic>
        <Alert
          message="Sorry, we are temporarily stopping the rewards withdrawal at the moment, for a patch. This should take a few hours to complete."
          type="error"
        ></Alert>
        <Button disabled type="primary" size="large" onClick={onSubmitWithdraw}>
          Withdraw
        </Button>
      </Form>
    </Wrap>
  )
}
