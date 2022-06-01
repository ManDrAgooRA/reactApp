import React, { useState, useEffect, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckBoxGroup, Heading } from 'grommet';
import {
  goodsSelector,
  goodsCategoriesSelector,
  goodsCountriesSelector,
} from '@/user/store/selectors';
import { setCategories, setCountries } from '@/user/store/actions';
import { getUniqueData } from '@/utils';
import { IFilterBy } from '@/interfaces/IFIlterBy';
import './filter.scss';

export const FilterBy: FC<IFilterBy> = ({ filterName }) => {
  const goods = useSelector(goodsSelector);
  const filterParam = useSelector(
    filterName === 'categories'
      ? goodsCategoriesSelector
      : goodsCountriesSelector
  );
  const dispatch = useDispatch();
  const [value, setValue] = useState(filterParam);

  useEffect(() => {
    dispatch(
      filterName === 'categories' ? setCategories(value) : setCountries(value)
    );
  }, [value]);

  return (
    <>
      <Heading level="3">
        Filter by {filterName}: {goods.length}
      </Heading>
      <div className="filter">
        <CheckBoxGroup
          id="check-box-group-id"
          name="controlled"
          aria-labelledby="check-box-formfield-id"
          value={value}
          onChange={({ value: nextValue }) => setValue(nextValue)}
          options={getUniqueData(`${filterName}`, goods)}
        />
      </div>
    </>
  );
};
