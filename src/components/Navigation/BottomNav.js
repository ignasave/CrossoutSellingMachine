import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { useStyles } from './styles';

function BottomNav({ actions }) {
  const classes = useStyles();
  const [redirect, setRedirect] = useState(null);

  const handleEvents = eventClicked => {
    eventClicked === 2 && setRedirect('/Config');
    actions[eventClicked].event();
  };

  return (
    <Fragment>
      {redirect ? (
        <Redirect to='/Config' />
      ) : (
        <Fragment>
          <BottomNavigation
            onChange={(event, newValue) => handleEvents(newValue)}
            className={classes.navigation}
          >
            {actions.map(element => {
              return (
                <BottomNavigationAction
                  key={`action-${element.label}`}
                  label={element.label}
                  icon={element.icon}
                  showLabel
                  className={classes.link}
                />
              );
            })}
          </BottomNavigation>
        </Fragment>
      )}
    </Fragment>
  );
}

BottomNav.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object)
};
export default BottomNav;
