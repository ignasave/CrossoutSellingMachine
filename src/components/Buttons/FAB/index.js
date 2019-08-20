import React from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import { useStyles } from './styles';

function FAB({
  color,
  icon,
  aria,
  tooltip,
  clickHandler,
  elevated = false
}) {
  const classes = useStyles();
  return (
    <Tooltip title={tooltip} placement='left'>
      <Fab
        onClick={clickHandler}
        color={color}
        aria-label={aria}
        className={elevated ? classes.fabe : classes.fab}
      >
        {icon}
      </Fab>
    </Tooltip>
  );
}

FAB.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.element,
  aria: PropTypes.string,
  tooltip: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default FAB;
