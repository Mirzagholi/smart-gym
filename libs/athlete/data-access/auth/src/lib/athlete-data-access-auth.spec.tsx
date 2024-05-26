import { render } from '@testing-library/react';

import AthleteDataAccessAuth from './athlete-data-access-auth';

describe('AthleteDataAccessAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AthleteDataAccessAuth />);
    expect(baseElement).toBeTruthy();
  });
});
