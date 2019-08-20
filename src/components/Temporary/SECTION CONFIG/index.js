import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { changeLanguaje } from '../../../core/actions';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FilledInput from '@material-ui/core/FilledInput';
import { Grid } from '@material-ui/core';

import Check from '@material-ui/icons/Check';

import { useStyles } from './styles';
import { lang } from './data';
import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';

import FAB from '../../Buttons/FAB';

function Config(props) {
  const { state, dispatch } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.Config;

  const [value, setValue] = useState(state.selectedLanguaje);

  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <FormControl
            variant='filled'
            className={classes.formControl}
          >
            <InputLabel htmlFor='lang'>
              {componentLanguaje.lang}
            </InputLabel>
            <Select
              value={value}
              onChange={event => setValue(event.target.value)}
              margin='none'
              input={<FilledInput name='lang' id='lang' />}
            >
              {lang.map((element, index) => {
                return (
                  <MenuItem
                    key={`languaje-${index}`}
                    value={element.value}
                  >
                    {element.display}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Link to='/'>
        <FAB
          color='secondary'
          icon={<Check />}
          aria='Confirm'
          tooltip={componentLanguaje.tooltip}
          clickHandler={() => {
            changeLanguaje({
              dispatch,
              payload: value
            });
          }}
        />
      </Link>
    </div>
  );
}

Config.propTypes = {};

export default Config;
