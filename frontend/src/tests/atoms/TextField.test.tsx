import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure';
import { TextField } from '@atoms/TextField';

describe('TextField', () => {
  let component: HTMLElement;
  beforeEach(() => {
    render(
      <TextField
        testId='TextField_test'
        required={false}
        color='primary'
        size='small'
        disabled={false}
      />
    );

    component = screen.getByTestId('TextField_test');
  });

  afterEach(() => {
    cleanup();
  })

  test('Should be able to render', () => {
    expect(component).toBeVisible();
    expect(component).toBeInTheDocument();
  });

  test('Should be able to be clicked', () => {  
    expect(fireEvent.click(component)).toBe(true);
  }) 

  test('Should contain testId', () => {
    expect(component).toHaveAttribute('data-testid', 'TextField_test');
  });

})

