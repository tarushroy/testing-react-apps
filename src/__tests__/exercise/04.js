// form testing
// http://localhost:3000/login

import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  let submittedData
  const handleSubmit = data => (submittedData = data)

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  const {container} = render(<Login onSubmit={handleSubmit} />)

  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  const usernameField = screen.getByLabelText('Username')
  const passwordField = screen.getByLabelText('Password')

  const [username, password] = ['testname', 'testpassword']

  await userEvent.type(usernameField, username)
  await userEvent.type(passwordField, password)

  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  const submitButton = screen.getByText('Submit')
  fireEvent.click(submitButton)
  expect(submittedData).toEqual({
    username,
    password
  })
})

/*
eslint
  no-unused-vars: "off",
*/
