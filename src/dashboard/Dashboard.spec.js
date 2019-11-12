import React from "react";
import Dashboard from "./Dashboard";
import Display from '../display/Display';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { isMainThread } from "worker_threads";

afterEach(rtl.cleanup);

it('renders display',() => {
  const dashboard = rtl.render(<Dashboard/>)
  const open = dashboard.queryByText(/Open/i)

  expect(open).toBeInTheDocument();
})

it('renders controls',() => {
  const dashboard = rtl.render(<Dashboard/>)
  const open = dashboard.queryByText(/Close Gate/i)

  expect(open).toBeInTheDocument();
})

it ('changes close button text on click',() => {
  const {getByTestId} = rtl.render(<Dashboard/>)
  rtl.fireEvent.click(getByTestId("open-button"))

  expect(getByTestId("open-button")).toHaveTextContent("Open Gate")
})

it ('changes lock button text on click',() => {
  const {getByTestId} = rtl.render(<Dashboard/>)
  rtl.fireEvent.click(getByTestId("lock-button"))

  expect(getByTestId("lock-button")).toHaveTextContent("Unlock Gate")
})

it('disables close button if gate is locked',() => {
  const {getByTestId} = rtl.render(<Dashboard/>)
  const button =(getByTestId('open-button'))

  expect(Object.values(button)[0].pendingProps.disabled).toBeTruthy();
})

it('disables lock button if gate is open',() => {
  const {getByTestId} = rtl.render(<Dashboard/>)
  const button =(getByTestId('lock-button'))

  expect(Object.values(button)[0].pendingProps.disabled).toBeTruthy();
})