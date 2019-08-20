import React from 'react';
import { Link } from 'react-router-dom';

import { List, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { Search as SearchIcon } from '@material-ui/icons';
import Add from '@material-ui/icons/Add';

import { items } from './data';
import FAB from '../../Buttons/FAB';
import { useStyles } from './styles';
import ItemListCategory from '../../Lists/ItemListCategory';
import { languajes, selectedLanguaje } from '../../../Languaje';

const componentLanguaje =
  languajes[selectedLanguaje].components.Search;

function Search({ match }) {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <TextField
          id='search'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Grid>

      <List className={classes.list}>
        {items.map((element, index) => {
          return (
            <ItemListCategory
              to={match.params.back ? '/AddNewItem' : '/'}
              key={`itemlistcategory-${index}`}
              category={element.category}
              icon={element.icon}
              childrens={element.childrens}
            />
          );
        })}
      </List>
      {match.params.back !== 'back' && (
        <Link to={'/AddNewItem'}>
          <FAB
            color='secondary'
            icon={<Add />}
            aria='Add item'
            tooltip={componentLanguaje.tooltip}
            clickHandler={() => {}}
          />
        </Link>
      )}
    </div>
  );
}

Search.propTypes = {};

export default Search;
