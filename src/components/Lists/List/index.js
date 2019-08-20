import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';

import { useStyles } from './styles';
import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';
import NoItem from '../../Messages/NoItem';

export default function ListItem({ childrens }) {
  const { state } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.List;
  const classes = useStyles();

  return (
    <Fragment>
      {childrens.length > 0 ? (
        <List
          className={classes.root}
          subheader={
            <ListSubheader>
              {componentLanguaje.firstSubHeader}
            </ListSubheader>
          }
        >
          <Link
            to={`/ClickItem/${childrens[0].props.id}`}
            className={classes.link}
          >
            {childrens[0]}
          </Link>
        </List>
      ) : (
        <div className={classes.center}>
          <NoItem />
        </div>
      )}
      {childrens.length > 1 ? (
        <List
          className={classes.root}
          subheader={
            <ListSubheader>
              {componentLanguaje.secondSubHeader}
            </ListSubheader>
          }
        >
          {childrens.map((element, index) => {
            if (index !== 0) {
              return (
                <Fragment key={`item${index}`}>
                  <Link
                    to={`/ClickItem/${element.props.id}`}
                    className={classes.link}
                  >
                    {element}
                  </Link>
                  {index + 1 !== childrens.length ? divider : null}
                </Fragment>
              );
            }
            return null;
          })}
        </List>
      ) : null}
    </Fragment>
  );
}

const divider = <Divider variant='inset' component='li' />;
