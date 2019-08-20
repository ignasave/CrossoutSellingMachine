import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';
import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';

const url =
  'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/0/0c/Icon_Large_Wheel.png/100px-Icon_Large_Wheel.png?version=e357b5b676b84aba87672043bc607765';

ItemListItem.propTypes = {
  alt: PropTypes.string,
  imgUrl: PropTypes.string,
  itemName: PropTypes.string,
  earnings: PropTypes.number
};

export default function ItemListItem({
  alt,
  imgUrl = url,
  itemName = componentLanguaje.notName,
  earnings = null
}) {
  const { state } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.ItemListItem;

  const classes = useStyles();

  return (
    <Fragment>
      <ListItem
        button
        alignItems='flex-start'
        className={classes.bottom}
      >
        <ListItemAvatar>
          <img alt={alt} width='75px' src={imgUrl} />
        </ListItemAvatar>
        <ListItemText
          className={classes.text}
          primary={<Typography variant='h6'>{itemName}</Typography>}
          secondary={
            <Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.TyInline}
              >
                {earnings
                  ? `${componentLanguaje.earnings}: ${earnings} g`
                  : componentLanguaje.noValue}
              </Typography>
            </Fragment>
          }
        />
      </ListItem>
    </Fragment>
  );
}
