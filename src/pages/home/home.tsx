import React from 'react';
import { useStylesHome } from './style';

export const Home = () => {
  const classes = useStylesHome();
  return <div className={classes.wrapper}>Home</div>;
};
