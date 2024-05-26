import { render } from '@testing-library/react';

import AthleteFeatureAuth from './athlete-feature-auth';

describe('AthleteFeatureAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AthleteFeatureAuth />);
    expect(baseElement).toBeTruthy();
  });
});
