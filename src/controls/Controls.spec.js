import React from "react";
import Controls from "./Controls";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

afterEach(rtl.cleanup)

it('displays a close button',() => {
  const controls = rtl.render(<Controls/>)
  const closeButton = controls.getByText(/Close Gate/i)

  expect(closeButton).toBeInTheDocument()
})

it ('displays a lock button',() => {
  const controls = rtl.render(<Controls/>)
  const lockButton = controls.getByText(/Lock Gate/i)

  expect(lockButton).toBeInTheDocument()
})