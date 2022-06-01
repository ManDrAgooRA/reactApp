import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Select } from 'grommet';
import { setSortSting } from '@/user/store/actions';

export const Sort: FC = () => {
  const dispatch = useDispatch();

  const options = [
    { label: 'Price ASC', value: 'Price ASC' },
    { label: 'Price DESC', value: 'Price DESC' },
    { label: 'Raiting ASC', value: 'Raiting ASC' },
    { label: 'Raiting DESC', value: 'Raiting DESC' },
  ];

  const handlerChange = (value: string) => {
    dispatch(setSortSting(value));
  };

  return (
    <Box align="center" justify="start">
      <Select
        name="select"
        placeholder="Sort By"
        options={options}
        labelKey="label"
        valueKey="value"
        onChange={({ option }) => handlerChange(option.value)}
      />
    </Box>
  );
};
