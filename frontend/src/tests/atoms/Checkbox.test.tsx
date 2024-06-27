import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure';
import { Checkbox } from '@atoms/Checkbox';

describe('Checkbox', () => {
  let component: HTMLElement;
  beforeEach(() => {
    render(
      <Checkbox
        testId='checkbox_test'
        variant='contained'
        color='primary'
        size='medium'
        disable={false}
        required={true}
        checked={false}
      />
    );

    component = screen.getByTestId('checkbox_test');
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
    expect(component).toHaveAttribute('data-testid', 'checkbox_test');
  });

})

