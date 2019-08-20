import React from 'react';
import FAB from './index';
import renderer from 'react-test-renderer';
import AddIcon from '@material-ui/icons/AddIcon';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <FAB
        onClick={() => {}}
        color='secondary'
        icon={<AddIcon />}
        aria='text'
        tooltip='text'
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
