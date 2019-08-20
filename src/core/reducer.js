function reducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM_TO_MAIN':
      const itemToAdd = state.items.find(
        element => action.payload === element.id
      );
      const repeatedItems = state.mainItems.find(
        element => action.payload === element.id
      );
      if (!repeatedItems) {
        return {
          ...state,
          mainItems: state.mainItems.concat(itemToAdd)
        };
      }
      return {
        ...state
      };

    case 'CLEAR_MAINPAGE':
      return {
        ...state,
        mainItems: []
      };
    case 'CHANGE_LANGUAJE':
      return {
        ...state,
        selectedLanguaje: action.payload
      };
    case 'SAVE_ADD_ITEM':
      return {
        ...state,
        saveNewItem: action.payload
      };
    case 'ERASE_ADD_ITEM':
      return {
        ...state,
        saveNewItem: {
          name: '',
          selectCat: '',
          benchPrice: '',
          craftsPerBench: '',
          timeOfCrafting: '',
          items: []
        }
      };
    case 'ORGANIZE_MAIN':
      return {
        ...state,
        mainItems: state.mainItems.sort(
          (a, b) => b.earnings - a.earnings
        )
      };
    case 'SET_EARNINGS':
      let itemToChange = state.mainItems.findIndex(
        element => element.id === action.payload.item.id
      );
      let temp = state.mainItems;
      let earnings = () => {
        let value = action.payload.itemValue;
        action.payload.valuesOfCrafts.forEach(element => {
          value -= element.quantity * element.value;
        });
        return value;
      };
      temp[itemToChange].earnings = earnings();
      return {
        ...state
      };
    default:
      return state;
  }
}

export default reducer;
