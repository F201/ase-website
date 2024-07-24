import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure';
import { Radio } from '@atoms/Radio';

describe('Radio', () => {
  let component: HTMLElement;
  beforeEach(() => {
    render(
      <Radio
        testId='Radio_test'
        checked={false}
        color='primary'
        size='medium'
        disabled={false}
      />
    );

    component = screen.getByTestId('Radio_test');
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
    expect(component).toHaveAttribute('data-testid', 'Radio_test');
  });

})

