import React, {
  Fragment,
  useState,
  useContext,
  useEffect
} from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../../core/store';
import { setEarnings } from '../../../core/actions';

import { Avatar } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Check from '@material-ui/icons/Check';

import ItemListQuantity from '../../Lists/ItemListQuantity';
import FAB from '../../Buttons/FAB';
import { useStyles } from './styles';
import { languajes } from '../../../Languaje';

const divider = <Divider variant='inset' component='li' />;

function ClickItem({ match }) {
  const [item, setItem] = useState(null);
  const [itemValue, setItemValue] = useState('');
  const [valuesOfCrafts, setValueOfCrafts] = useState([]);
  const { state, dispatch } = useContext(Store);
  const componentLanguaje =
    languajes[state.selectedLanguaje].components.ClickItem;
  useEffect(() => {
    let fullItem = () => {
      let tempItem = state.items.find(
        element => element.id === Number(match.params.id)
      );
      tempItem.crafts = tempItem.crafts.map(element => {
        let newE = element;
        const itemFinded = state.items.find(
          stateItem => stateItem.id === Number(newE.id)
        );
        newE.imgUrl = itemFinded.imgUrl;
        newE.itemName = itemFinded.itemName;
        return newE;
      });
      return tempItem;
    };
    setItem(fullItem);
  }, [match, state.items]);

  const classes = useStyles();
  return (
    <div>
      <div className={classes.center}>
        <Avatar
          className={classes.center}
          src={item && item.imgUrl}
        />
        <Typography variant='h6'>
          {item && item.itemName.toUpperCase()}
        </Typography>
      </div>

      <TextField
        id='filled-name'
        placeholder={componentLanguaje.sellPrice}
        margin='normal'
        variant='filled'
        value={itemValue}
        onChange={event => setItemValue(event.target.value)}
        className={classes.center}
      />

      {item &&
        item.crafts.map((element, index) => {
          return (
            <Fragment key={`itemlisquantity-${index}`}>
              <ItemListQuantity
                valuesOfCrafts={valuesOfCrafts}
                setValueOfCrafts={setValueOfCrafts}
                id={index}
                name={element.itemName}
                img={element.imgUrl}
                placeholder={componentLanguaje.buyPrice}
                cuantity={element.quantity}
              />
              {item.crafts.length !== index + 1 && divider}
            </Fragment>
          );
        })}
      <Link to='/'>
        <FAB
          color='secondary'
          icon={<Check />}
          aria='check'
          tooltip={componentLanguaje.tooltip}
          clickHandler={() => {
            setEarnings({
              dispatch,
              payload: {
                item: item,
                itemValue: itemValue,
                valuesOfCrafts: valuesOfCrafts
              }
            });
          }}
        />
      </Link>
    </div>
  );
}

ClickItem.propTypes = {};

export default ClickItem;
