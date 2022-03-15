import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';
import { BrowserRouter } from 'react-router-dom';

test("Home renders correctly", () => {
  render(<BrowserRouter><Home /></BrowserRouter>);

  // screen.getByRole('');

  expect(screen.getByRole('heading').textContent).toMatch(/View Our Lens Selection./i);
  expect(screen.getByRole('link').textContent).toMatch(/Shop Now/i);
});