import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// it should render component title
// it('should render compnent title', () => {
//   render(<Counter title='Resp counter' />);
//   const counterEl = screen.getByText('Reps counter');
//   expect(counterEl).toBeInTheDocument();
// });

// it should render title from props
it('should render title from props', () => {
  render(<Counter title='Reps counter' />);
  const headerEl = screen.getByRole('heading', { name: 'Reps counter' });
  expect(headerEl).toBeInTheDocument();
});

// it should render 4 buttons
it('should render 4 buttons', () => {
  render(<Counter title='Reps counter' />);
  const buttonsArr = screen.getAllByRole('button');
  expect(buttonsArr.length).toBe(4);
});

// it should increase the counter by 1 after i press Add
it('should increase the counter by 1 after i press Add', () => {
  render(<Counter title='Reps counter' />);
  const addBtn = screen.getByRole('button', { name: 'Add' });
  fireEvent.click(addBtn);
  const counterEl = screen.getByRole('heading', { name: 1 });
  expect(counterEl).toHaveTextContent('1');
});
