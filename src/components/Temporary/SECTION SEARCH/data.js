import { languajes, selectedLanguaje } from '../../../Languaje';

const componentLanguaje =
  languajes[selectedLanguaje].components.Search;

export const items = [
  {
    category: componentLanguaje.categories.weapons,
    icon:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/a/ae/Weapons.png/50px-Weapons.png?version=7ca076b76653ce505d146a22044e6cdb',
    childrens: [
      { itemName: 'Synthesis', id: 1 },
      { itemName: 'Aurora', id: 2 },
      { itemName: 'Quasar', id: 3 }
    ]
  },
  {
    category: componentLanguaje.categories.structure,
    icon:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/6/65/Structures.png/50px-Structures.png?version=b023a6ed6376e44e7ca2f31b787d3688',
    childrens: [
      { itemName: 'Frame 2*4' },
      { itemName: 'Frame 6*4' },
      { itemName: 'Frame 8*4' }
    ]
  },
  {
    category: componentLanguaje.categories.hardware,
    icon:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/9/97/Hardware.png/50px-Hardware.png?version=7e79aba9d828eb9a9bb3224fc1ee5b3d',
    childrens: [
      { itemName: 'Radio' },
      { itemName: 'Fuel barrel' },
      { itemName: 'Scope' }
    ]
  },
  {
    category: componentLanguaje.categories.resources,
    icon:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/6/67/Ressources.png/61px-Ressources.png?version=55190dd90a0acbb8f3cb2dfcfe63bea7',
    childrens: [
      { itemName: 'Scrap metal' },
      { itemName: 'Engineer badge' },
      { itemName: 'Copper' }
    ]
  }
];
