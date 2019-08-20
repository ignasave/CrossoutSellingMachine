import { languajes, selectedLanguaje } from '../../../Languaje';

const componentLanguaje = languajes[selectedLanguaje].components.Config;

export const lang = [
    {
        display: componentLanguaje.english,
        value: 'english'
    },
    {
        display: componentLanguaje.spanish,
        value: 'spanish'
    }
]

