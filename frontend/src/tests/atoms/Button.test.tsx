
import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Button } from '@atoms/Button';

describe('Button', () => {
  let component: HTMLElement;
  
  beforeEach(() => {
    render(
      <Button 
        testId='button_test'
        variant='contained'
        color='primary'
        size='medium'
        disable={false}
      > 
        Click me 
      </Button>
    );

    component = screen.getByTestId('button_test');
  });

  afterEach(() => {
    cleanup();
  });

  test('Should render with text', () => {
    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent('Click me');
  });

  test('Should be clickable', () => {
    
    expect(fireEvent.click(component)).toBe(true);
  });

  test('Should contain testId', () => {
    expect(component).toHaveAttribute('data-testid', 'button_test');
  });

  test('Should be a button', () => {
    expect(component).toHaveAttribute('type', 'button');
  });

});

describe('Button - Edge Cases', ()=> {
  let component: HTMLElement;
  beforeEach(()=> {
    render(
      <Button 
        testId='button_test'
        variant='contained'
        color='primary'
        size='medium'
        disable={true}
      > 
        Click me 
      </Button>
    );

    component = screen.getByTestId('button_test');
  })

  afterEach(() => {
    cleanup();
  })

  test('Should be disabled', () => {
    expect(component).toBeDisabled();
    expect(component).toHaveAttribute('disabled');
  })
})