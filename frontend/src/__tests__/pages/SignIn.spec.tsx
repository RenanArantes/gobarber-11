import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe('SignIn Page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const paswordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'email@email.com' } });
    fireEvent.change(paswordField, { target: { value: '123456789' } });

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
  });
});
