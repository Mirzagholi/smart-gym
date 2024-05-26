import styled from 'styled-components';

/* eslint-disable-next-line */
export interface AthleteFeatureEntriesProps {}

const StyledAthleteFeatureEntries = styled.div`
  color: pink;
`;

export function AthleteFeatureEntries(props: AthleteFeatureEntriesProps) {
  return (
    <StyledAthleteFeatureEntries>
      <h1>Welcome to AthleteFeatureEntries!</h1>
    </StyledAthleteFeatureEntries>
  );
}

export default AthleteFeatureEntries;
