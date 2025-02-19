import React from 'react';
import Details from './Details';

const ProblemDetails = () => (
  <Details
    title="Problem Details"
    data={{
      Concern: ['Back Pain'],
      Symptoms: [
        'Pain in middle area stomach. Already consumed painkillers for past two days and there is no progress.',
        {flexShrink: 1, maxWidth: '92%'},
      ],
    }}
  />
);

export default ProblemDetails;
