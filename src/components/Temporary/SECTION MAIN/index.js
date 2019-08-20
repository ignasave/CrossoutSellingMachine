import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { clearMainPage } from '../../../core/actions';

import Add from '@material-ui/icons/Add';

import BottomNav from '../../Navigation/BottomNav';
import ItemListItem from '../../Lists/ItemListItem';
import FAB from '../../Buttons/FAB';
import ListItem from '../../Lists/List';
import { actions } from './data';
import { organizeMainItemList } from '../../../core/actions';
import { Store } from '../../../core/store';
import { languajes } from '../../../Languaje';

function Main() {
  const { state, dispatch } = useContext(Store);

  const componentLanguaje =
    languajes[state.selectedLanguaje].components.Main;

  const itemsComponents = state.mainItems.map((element, index) => {
    return (
      <ItemListItem
        imgUrl={element.imgUrl}
        itemName={element.itemName}
        earnings={element.earnings}
        id={element.id}
        key={`itemlist-${index}`}
      />
    );
  });

  useEffect(() => {
    organizeMainItemList({ dispatch });
  }, [state.mainItems, dispatch]);

  const withDispatchActions = actions;
  withDispatchActions[0].event = () => {
    clearMainPage({ dispatch });
  };
  withDispatchActions[1].event = () => {
    organizeMainItemList({ dispatch });
  };

  return (
    <div>
      <BottomNav actions={withDispatchActions} />
      <ListItem childrens={itemsComponents} />
      <Link to='/Search'>
        <FAB
          color='secondary'
          icon={<Add />}
          aria='Add item'
          tooltip={componentLanguaje.tooltip}
          elevated
          clickHandler={() => {}}
        />
      </Link>
    </div>
  );
}

Main.propTypes = {};

export default Main;
