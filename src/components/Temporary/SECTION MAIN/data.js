import React from 'react';
import Delete from '@material-ui/icons/Delete';
import Refresh from '@material-ui/icons/Refresh';
import Settings from '@material-ui/icons/Settings';
import { languajes, selectedLanguaje } from '../../../Languaje';

const componentLanguaje = languajes[selectedLanguaje].components.Main;

export const actions = [
  {
    label: componentLanguaje.actions.clean,
    icon: <Delete />,
    event: () => {}
  },
  {
    label: componentLanguaje.actions.refresh,
    icon: <Refresh />,
    event: () => {}
  },
  {
    label: componentLanguaje.actions.settings,
    icon: <Settings />,
    event: () => {}
  }
];
