import { render } from '@testing-library/react';

import AthleteFeatureEntries from './athlete-feature-entries';

describe('AthleteFeatureEntries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AthleteFeatureEntries />);
    expect(baseElement).toBeTruthy();
  });
});
