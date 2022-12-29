import { fireEvent, render, screen } from '@testing-library/svelte';

import Counter from './Counter.svelte';

const initialize = () => render(Counter);

describe('Counter.svelte', () => {
  it('initially has value of 0', () => {
    initialize();
    expect(screen.getByText('Count is 0')).toBeTruthy();
  });
  it('increments value by 1', async () => {
    initialize();
    fireEvent.click(screen.getByText('Count is 0'));
    await screen.findByText('Count is 1');
  });
});
