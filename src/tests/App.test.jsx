import '@testing-library/jest-dom'
import { describe, expect, it } from "vitest"
import { LoginUser } from '../pages/Login'
import { MainLayout } from '../pages/MainLayout'
import { fireEvent, render, screen } from './test-utils'

test('Inicio fluxo tela principal main layout', () => {
  render(<MainLayout />)
  expect(screen.getByText('Inicio')).toBeInTheDocument();
});

test ('Acessar via login', () => {

  const { getByPlaceholderText, getByLabelText } = render(<LoginUser />)
  const inputLogin = getByPlaceholderText('Email')
  const inputPassword = getByPlaceholderText('Senha')
  const submitButton = getByLabelText('btn-submit')

  fireEvent.change(inputLogin, { target: { value: 'testeteste' } })
  fireEvent.change(inputPassword, { target: { value: '123456' } })
  fireEvent.click(submitButton)

})
