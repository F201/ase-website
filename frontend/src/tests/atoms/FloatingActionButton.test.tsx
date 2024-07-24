import '@testing-library/jest-dom';

import { cleanup, fireEvent, render, screen } from '@testing-library/react/pure';
import { Fab } from '@atoms/FloatingActionButton';

describe('Fab', () => {
  let component: HTMLElement;
  beforeEach(() => {
    render(
      <Fab
        testId='Fab_test'
        variant='circular'
        color='primary'
        size='medium'
        disable={false}
        children='+'
      />
    );

    component = screen.getByTestId('Fab_test');
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
    expect(component).toHaveAttribute('data-testid', 'Fab_test');
  });

})

