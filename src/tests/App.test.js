import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Test component Table', () => {
  test('Testando se imputs estao na tela', () => {
    render(<App />);
    const testHearder = screen.getByRole('heading', { name: /starwars/i })
    expect(testHearder).toBeInTheDocument();

    const testName = screen.getByTestId("name-filter");
    expect(testName).toBeInTheDocument();

    const testColumn = screen.getByTestId("column-filter");
    expect(testColumn).toBeInTheDocument();
    
    const testComparison = screen.getByTestId("comparison-filter");
    expect(testComparison).toBeInTheDocument();

    const testValue = screen.getByTestId("value-filter");
    expect(testValue).toBeInTheDocument();
    
    const testButton = screen.getByTestId("button-filter");
    expect(testButton).toBeInTheDocument();
    
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();

  });
  test('Testando os imputs', () => {
    render(<App />);
    const testColumn = screen.getByTestId("column-filter");
    const testComparison = screen.getByTestId("comparison-filter");
    const testValue = screen.getByTestId("value-filter");
    const testButton = screen.getByTestId("button-filter");
    
    
    userEvent.selectOptions(testColumn, 'orbital_period')
    userEvent.selectOptions(testComparison, 'menor que')
    userEvent.type(testValue, '35')
    userEvent.click(testButton)

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
})
