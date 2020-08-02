import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be abe to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'valido@email.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('valido@email.com');
  });
});
