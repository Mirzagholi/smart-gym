import { render } from '@testing-library/react';

import AthleteFeatureHome from './athlete-feature-home';

describe('AthleteFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AthleteFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
