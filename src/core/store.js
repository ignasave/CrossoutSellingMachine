import React, { createContext, useReducer } from 'react';
import reducer from './reducer.js';

export const Store = createContext();

const initialState = {
  selectedLanguaje: 'spanish',
  saveNewItem: {
    name: '',
    selectCat: '',
    benchPrice: '',
    craftsPerBench: '',
    timeOfCrafting: '',
    items: []
  },
  mainItems: [
    {
      category: 'weapons',
      itemName: 'Synthesis',
      imgUrl:
        'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/f/f1/%D0%A1%D0%B8%D0%BD%D1%82%D0%B5%D0%B7.png/100px-%D0%A1%D0%B8%D0%BD%D1%82%D0%B5%D0%B7.png?version=30004cc9a9d098b356bc4436597d5d71',
      crafts: [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
        { id: 1, quantity: 4 }
      ],
      id: 1,
      earnings: 30
    },
    {
      category: 'weapons',
      itemName: 'Aurora',
      imgUrl:
        'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/8/80/%D0%90%D0%B2%D1%80%D0%BE%D1%80%D0%B0.png/100px-%D0%90%D0%B2%D1%80%D0%BE%D1%80%D0%B0.png?version=754fe350798e3dc87c34f8fc1e8d2f12',
      crafts: [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
        { id: 1, quantity: 4 }
      ],
      id: 2,
      earnings: 15
    }
  ],
  items: [
    {
      category: 'weapons',
      itemName: 'Synthesis',
      imgUrl:
        'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/f/f1/%D0%A1%D0%B8%D0%BD%D1%82%D0%B5%D0%B7.png/100px-%D0%A1%D0%B8%D0%BD%D1%82%D0%B5%D0%B7.png?version=30004cc9a9d098b356bc4436597d5d71',
      crafts: [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
        { id: 1, quantity: 4 }
      ],
      id: 1
    },
    {
      category: 'weapons',
      itemName: 'Aurora',
      imgUrl:
        'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/8/80/%D0%90%D0%B2%D1%80%D0%BE%D1%80%D0%B0.png/100px-%D0%90%D0%B2%D1%80%D0%BE%D1%80%D0%B0.png?version=754fe350798e3dc87c34f8fc1e8d2f12',
      crafts: [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
        { id: 1, quantity: 4 }
      ],
      id: 2
    },
    {
      category: 'weapons',
      itemName: 'Quasar',
      imgUrl:
        'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/6/65/%D0%9A%D0%B2%D0%B0%D0%B7%D0%B0%D1%80.png/100px-%D0%9A%D0%B2%D0%B0%D0%B7%D0%B0%D1%80.png?version=2dfcd428cedcf7288098f01ba7df4c0e',
      crafts: [
        { id: 2, quantity: 2 },
        { id: 3, quantity: 3 },
        { id: 1, quantity: 4 }
      ],
      id: 3
    }
  ]
};

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}
