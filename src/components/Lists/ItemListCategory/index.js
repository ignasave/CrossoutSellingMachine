import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../../core/store';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { withStyles } from '@material-ui/core/styles';
import { Typography, ListItemAvatar } from '@material-ui/core';
import { addItemToMainPage } from '../../../core/actions';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { styles } from './styles';

function ItemListCategory({
  category,
  childrens,
  classes,
  icon,
  alt,
  to
}) {
  const { dispatch } = useContext(Store);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleEvent = (element) => {
    if (to === '/') {
      addItemToMainPage({ dispatch, payload: element.id });
    }
  };

  const makeChildrens = items => {
    return items.map((element, index) => {
      return (
        <Collapse in={open} key={index} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <Link to={to} className={classes.link}>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleEvent(element)}
              >
                <ListItemText primary={element.itemName} />
              </ListItem>
            </Link>
          </List>
        </Collapse>
      );
    });
  };

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemAvatar>
          <img src={icon} alt={alt} width='50px' />
        </ListItemAvatar>
        <ListItemText
          inset
          className={classes.title}
          primary={
            <Typography
              variant='h6'
              className={open ? classes.open : null}
              gutterBottom
            >
              {category}
            </Typography>
          }
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      {makeChildrens(childrens)}
    </Fragment>
  );
}

export default withStyles(styles)(ItemListCategory);
