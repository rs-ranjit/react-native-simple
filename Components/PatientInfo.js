import React from 'react';
import Details from './Details';

const PatientInfo = () => (
  <Details
    title="Patient Information"
    data={{
      Name: ['Ansal Gurung'],
      Email: ['ansalgurung124@gmail.com'],
      Phone: ['+977 980 4567891'],
      Address: ['Kathmandu, Nepal'],
      DOB: ['1995-08-25'],
      Status: ['Male'],
    }}
  />
);

export default PatientInfo;
