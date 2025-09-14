import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../components/ui/Button';

describe('Button', () => {
  test('renders with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('btn-primary');
  });

  test('renders with secondary variant', () => {
    render(<Button variant="secondary">Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('btn-secondary');
  });

  test('renders with large size', () => {
    render(<Button size="lg">Click me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toHaveClass('px-6');
  });
});