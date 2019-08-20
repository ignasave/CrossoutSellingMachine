import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Main from '../components/Temporary/SECTION MAIN';
import Search from '../components/Temporary/SECTION SEARCH';
import ClickItem from '../components/Temporary/SECTION CLICK A ITEM/index';
import AddNewItem from '../components/Temporary/SECTION MAKE A NEW ITEM';
import Config from '../components/Temporary/SECTION CONFIG';

export default function Routes() {
  return (
    <Fragment>
      {routesCFG.map((element, index) => {
        return (<Route
          key={`rotue-${index}`}
          exact={element.exact}
          path={element.path}
          component={element.component}
        />)
      })}
    </Fragment>
  );
}

const routesCFG = [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/Search/:back',
    component: Search
  },
  {
    path: '/Search',
    component: Search,
    exact: true
  },
  {
    path: '/ClickItem/:id',
    component: ClickItem
  },
  {
    path: '/AddNewItem',
    component: AddNewItem
  },
  {
    path:'/Config',
    component: Config
  }
];
