import { render } from '@testing-library/react';

import Component1 from './Component1';

describe('Component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component1 />);
    expect(baseElement).toBeTruthy();
  });
});
