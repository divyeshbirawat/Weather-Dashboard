import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from '../errorBoundary';
import Error from '../../error/error';

// Mocking the Error component
jest.mock('../../error/error', () => {
  return function MockError({ message }: { message: string }) {
    return <div data-testid="error-component">{message}</div>;
  };
});

describe('ErrorBoundary', () => {
  class TestError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'TestError';
    }
  }

  const ThrowError = () => {
    throw new TestError('Test error');
  };

  test('renders child component when there is no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Child Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  test('renders Error component when an error is thrown', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('error-component')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Please try again later.')).toBeInTheDocument();
  });
});
