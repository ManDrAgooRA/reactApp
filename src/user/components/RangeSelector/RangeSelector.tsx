import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  RangeSelector,
  Stack,
  Text,
  FormField,
  MaskedInput,
} from 'grommet';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { priceRangeValidationSchema } from '@/utils/validations';
import {
  allGoodsSelector,
  goodsMaxPriceSelector,
} from '@/user/store/selectors';
import {
  setMinPrice,
  setMaxPrice,
  setCurrentMaxPrice,
} from '@/user/store/actions';
import { getMinMaxValue } from '@/utils';
import './rangeSelector.scss';

export const PriceRange: FC = () => {
  const allGoods = useSelector(allGoodsSelector);
  const maxPrice = useSelector(goodsMaxPriceSelector);
  const dispatch = useDispatch();
  const { minValue, maxValue } = getMinMaxValue(allGoods);
  const [range, setRange] = useState([minValue, maxValue]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(priceRangeValidationSchema),
    defaultValues: {
      minValue,
      maxValue,
    },
  });

  const changeValue = () => {
    dispatch(setMinPrice(range[0]));
    dispatch(setCurrentMaxPrice(range[1]));
  };

  const onSubmit = () => {
    changeValue();
  };

  useEffect(() => {
    dispatch(setMinPrice(+range[0]));
    dispatch(setCurrentMaxPrice(+range[1]));
    dispatch(setMaxPrice(maxValue));
  }, []);

  return (
    <>
      <Stack>
        <div className="price-range">
          <RangeSelector
            direction="horizontal"
            min={1}
            max={maxPrice}
            step={1}
            values={range}
            onChange={(nextRange) => {
              setRange(nextRange);
            }}
          />
        </div>
      </Stack>

      <Box align="center">
        <Text size="small">{`${range[0]}₴ - ${range[1]}₴`}</Text>
        <div className="price-filter">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-wrap">
              <div className="price-input">
                <FormField
                  {...register('minValue')}
                  label="Min price"
                  type="number"
                  value={range[0]}
                  error={errors?.minValue?.message}
                  onChange={(e) => setRange([+e.target.value, range[1]])}
                >
                  <MaskedInput name="minValue" />
                </FormField>
              </div>

              <div className="price-input">
                <FormField
                  {...register('maxValue')}
                  label="Max price"
                  type="number"
                  value={range[1]}
                  error={errors.maxValue?.message}
                  onChange={(e) => setRange([range[0], +e.target.value])}
                >
                  <MaskedInput name="maxValue" />
                </FormField>
              </div>
            </div>

            <input type="submit" value="Ok" className="btn btn-form" />
          </form>
        </div>
      </Box>
    </>
  );
};
