import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './styles';

const defaultImg =
  'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/0/0c/Icon_Large_Wheel.png/100px-Icon_Large_Wheel.png?version=e357b5b676b84aba87672043bc607765';

ItemListQuantity.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  img: PropTypes.string,
  cuantity: PropTypes.number
};

export default function ItemListQuantity({
  name,
  placeholder,
  img = defaultImg,
  cuantity = null,
  setValueOfCrafts,
  id,
  valuesOfCrafts
}) {
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    if (valuesOfCrafts) {
      const temp = valuesOfCrafts;
      temp[id] = { quantity: cuantity, value: Number(value) };
      setValueOfCrafts(temp);
    }
  }, [value, valuesOfCrafts, id, setValueOfCrafts, cuantity]);
  return (
    <Fragment>
      <List className={classes.root}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <img alt='Best option' width='75px' src={img} />
          </ListItemAvatar>
          <ListItemText
            className={classes.margin}
            disableTypography
            primary={
              <Typography variant='h6'>
                {`${name}`} {cuantity && `x ${cuantity}`}
              </Typography>
            }
            secondary={
              <Fragment>
                <TextField
                  id='standard-number'
                  placeholder={placeholder}
                  value={value}
                  onChange={event => setValue(event.target.value)}
                  type='number'
                  className={classes.input}
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin='none'
                />
              </Fragment>
            }
          />
        </ListItem>
      </List>
    </Fragment>
  );
}
