import React, { useContext } from 'react';

import Fab from '@material-ui/core/Fab';

import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';

function AddAnItem(props) {
  const { state } = useContext(Store);
  const componentLanguaje = languajes[state.selectedLanguaje].components.AddAnItem;
  return (
    <Fab
      variant='extended'
      size='medium'
      color='secondary'
      aria-label='Add'
    >
      {componentLanguaje.text}
    </Fab>
  );
}

AddAnItem.propTypes = {};

export default AddAnItem;
