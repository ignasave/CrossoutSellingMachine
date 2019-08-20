import React, { useContext } from 'react';

import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';

function NoItem() {
  const { state } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.NoItem;
  const classes = useStyles();
  return (
    <Typography variant='h5' className={classes.message}>
      {componentLanguaje.text}
    </Typography>
  );
}

export default NoItem;
