import React from "react";
import Display from "./Display";
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


afterEach(rtl.cleanup);

it('defaults to unlocked',() => {
  const display = rtl.render(<Display/>)
  const openDisplay = display.queryByText(/Open/i)

  expect(openDisplay).toBeTruthy();
});

it('defaults to open',() => {
  const display = rtl.render(<Display/>)
  const unlockedDisplay = display.queryByText(/Unlocked/i)

  expect(unlockedDisplay).toBeTruthy();
})

it('displays Closed if closed prop is true',() => {
  const display = rtl.render(<Display closed={true}/>)
  const closedDisplay = display.queryByText(/Closed/i)
  console.log(Object.values(closedDisplay)[0].pendingProps.className)

  expect(closedDisplay).toBeTruthy();
})

it('displays Locked if locked prop is true',() => {
  const display = rtl.render(<Display locked={true}/>)
  const lockedDisplay = display.queryByText(/^Locked/i)

  expect(lockedDisplay).toBeTruthy();
})

it('has className "red-led" when closed is true',() => {
  const display = rtl.render(<Display closed={true}/>)
  const closedDisplay = display.queryByText(/Closed/i)
  const checkClass = Object.values(closedDisplay)[0].pendingProps.className
  console.log(checkClass)

  expect(checkClass).toEqual(expect.stringContaining('red-led'))
})

it('has className "red-led" when locked is true',() => {
  const display = rtl.render(<Display locked={true}/>)
  const lockedDisplay = display.queryByText(/^Locked/i)
  const checkClass = Object.values(lockedDisplay)[0].pendingProps.className
  console.log(checkClass)

  expect(checkClass).toEqual(expect.stringContaining('red-led'))
})

it('has className "green-led" when closed is false',() => {
  const display = rtl.render(<Display/>)
  const closedDisplay = display.queryByText(/Open/i)
  const checkClass = Object.values(closedDisplay)[0].pendingProps.className
  console.log(checkClass)

  expect(checkClass).toEqual(expect.stringContaining('green-led'))
})

it('has className "green-led" when locked is false',() => {
  const display = rtl.render(<Display/>)
  const lockedDisplay = display.queryByText(/Unlocked/i)
  const checkClass = Object.values(lockedDisplay)[0].pendingProps.className
  console.log(checkClass)

  expect(checkClass).toEqual(expect.stringContaining('green-led'))
})