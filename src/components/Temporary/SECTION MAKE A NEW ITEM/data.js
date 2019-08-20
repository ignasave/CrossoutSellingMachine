import { languajes, selectedLanguaje } from '../../../Languaje'

const componentLanguaje = languajes[selectedLanguaje].components.NewItem


export const items = [
  {
    name: 'Pyre launcher',
    cuantity: 6,
    img:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/e/e7/Icon_Pyre.png/100px-Icon_Pyre.png?version=f730f85f4616040e17fa82a08dc45b90'
  },
  {
    name: 'Scorpion',
    cuantity: 2,
    img:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/a/ab/Scorpion.png/100px-Scorpion.png?version=bf2e8df8029b46d4dcde283779c44d04'
  },
  {
    name: 'Scap metal',
    cuantity: 100,
    img:
      'https://gamepedia.cursecdn.com/crossout_gamepedia/thumb/b/b8/Scrap.png/100px-Scrap.png?version=5c4d9e8a1c9c54d6d262b59e0fabb554'
  }
];

export const sections = [
  {
    value: 'weapons',
    display: componentLanguaje.sections.weapons
  },
  {
    value: 'structure',
    display: componentLanguaje.sections.structure
  },
  {
    value: 'hardware',
    display: componentLanguaje.sections.hardware
  },
  {
    value: 'resources',
    display: componentLanguaje.sections.resources
  }
];
