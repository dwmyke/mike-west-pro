import React from 'react';

import PageLayout from './src/layouts/page-layout';
import "@fontsource/oxygen"
import "@fontsource/source-sans-pro"


export const wrapPageElement = ({ element }) => {
  return <PageLayout>{element}</PageLayout>;
};