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
    userEvent.type(testName, "Tat")

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

    const btnX = screen.getByRole('button', { name: /x/i })
    userEvent.click(btnX);

    userEvent.selectOptions(testColumn, 'population')
    userEvent.selectOptions(testComparison, 'igual a')
    userEvent.type(testValue, '2000000000')
    userEvent.click(testButton)

    const btnRemove = screen.getByRole('button', { name: /remover filtros/i })
    userEvent.click(btnRemove)
    
    userEvent.selectOptions(testColumn, 'diameter')
    userEvent.selectOptions(testComparison, 'maior que')
    userEvent.type(testValue, '117999')
    userEvent.click(testButton)
    
  });
})
