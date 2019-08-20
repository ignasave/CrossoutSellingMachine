import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
  FilledInput,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';

import Fab from '@material-ui/core/Fab';
import Check from '@material-ui/icons/Check';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import CameraAlt from '@material-ui/icons/CameraAlt';

import { items, sections } from './data';
import FAB from '../../Buttons/FAB';
import ItemListQuantity from '../../Lists/ItemListQuantity';
import AddAnItem from '../../Buttons/AddAnItem';
import { Store } from '../../../core/store';
import {
  saveAddNewItem,
  eraseAddNewItem
} from '../../../core/actions';
import { languajes } from '../../../Languaje';
import { useStyles } from './styles';

const divider = <Divider variant='inset' component='li' />;

function AddNewItem() {
  const { state, dispatch } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.NewItem;
  const saved = state.saveNewItem;
  const [selectCat, setSelectCat] = useState(saved.selectCat);
  const [name, setName] = useState(saved.name);
  const [benchPrice, setBenchPrice] = useState(saved.benchPrice);
  const [craftsPerBench, setCraftPerBench] = useState(saved.craftsPerBench);
  const [timeOfCrafting, setTimeOfCrafting] = useState(saved.timeOfCrafting);

  const saveInputs = () => {
    saveAddNewItem({
      dispatch,
      payload: {
        name: name,
        selectCat: selectCat,
        benchPrice: benchPrice,
        craftsPerBench: craftsPerBench,
        timeOfCrafting: timeOfCrafting,
        items: items
      }
    });
  };

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
          <Fab color='primary' aria-label='Add'>
            <CameraAlt />
          </Fab>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={name}
            onChange={event => setName(event.target.value)}
            id='filled-name'
            label={componentLanguaje.name}
            margin='none'
            variant='filled'
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl
            variant='filled'
            className={classes.formControl}
          >
            <InputLabel htmlFor='section'>
              {componentLanguaje.section}
            </InputLabel>
            <Select
              margin='none'
              value={selectCat}
              onChange={event => setSelectCat(event.target.value)}
              input={<FilledInput name='section' id='section' />}
            >
              {sections.map((element, index) => {
                return (
                  <MenuItem
                    key={`menuitem-${index}`}
                    value={element.value}
                  >
                    {element.display}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name={benchPrice}
            onChange={event => setBenchPrice(event.target.value)}
            id='filled-name'
            label={componentLanguaje.benchPrice}
            margin='none'
            variant='filled'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='filled-name'
            value={craftsPerBench}
            onChange={event => setCraftPerBench(event.target.value)}
            label={componentLanguaje.craftsPerBench}
            margin='none'
            variant='filled'
            type='number'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='filled-name'
            value={timeOfCrafting}
            onChange={event => setTimeOfCrafting(event.target.value)}
            label={componentLanguaje.timeOfCrafting}
            margin='none'
            variant='filled'
          />
        </Grid>
      </Grid>

      <div className={classes.spacing}>
        <div className={classes.center}>
          <Link
            to='/Search/back'
            className={classes.text}
            onClick={saveInputs}
          >
            <AddAnItem />
          </Link>
        </div>
      </div>

      {saved.items.map((element, index) => {
        return (
          <Fragment key={`itemlisquantity-${index}`}>
            <ItemListQuantity
              name={element.name}
              img={element.img}
              placeholder={componentLanguaje.cuantity}
            />
            {items.length !== index + 1 && divider}
          </Fragment>
        );
      })}

      <Link to='/Search'>
        <FAB
          color='secondary'
          icon={<Check />}
          aria='check'
          tooltip={componentLanguaje.tooltip}
          clickHandler={() => {
            eraseAddNewItem({ dispatch });
          }}
        />
      </Link>
    </div>
  );
}

AddNewItem.propTypes = {};

export default AddNewItem;
