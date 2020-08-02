import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

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
      signIn: mockedSignIn,
    }),
  };
});

describe('SignIn Page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

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

  it('should not be able to sign in with invalid credentials', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const paswordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'not-valid-email' } });
    fireEvent.change(paswordField, { target: { value: '123456789' } });

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    expect(mockedHistoryPush).not.toHaveBeenCalled();
  });

  it('should display and error if login fails', async () => {
    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const emailField = getByPlaceholderText('E-mail');
    const paswordField = getByPlaceholderText('Password');
    const buttonElement = getByText('Entrar');

    fireEvent.change(emailField, { target: { value: 'valid@email.com' } });
    fireEvent.change(paswordField, { target: { value: '123456789' } });

    await wait(() => {
      fireEvent.click(buttonElement);
    });

    expect(mockedAddToast).toHaveBeenCalledWith(
      expect.objectContaining({
        type: 'error',
      }),
    );
  });
});
