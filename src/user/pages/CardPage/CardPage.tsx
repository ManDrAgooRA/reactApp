import React, { FC, useEffect } from 'react';
import { Grommet, Box, ResponsiveContext, Grid } from 'grommet';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentGoods } from '@/user/store/thunks/goods';
import { CustomSpinner } from '@/sharedComponents/Spinner/Spinner';
import {
  selectedGoodsSelector,
  isLoadCurrentGoodsSelector,
  modalStateSeletor,
} from '@/user/store/selectors';
import { AddToFavorite } from '@/user/components/AddToFavorite/AddToFavorite';

import './cardPage.scss';

export const CardPage: FC = () => {
  const selectedGoods = useSelector(selectedGoodsSelector);
  const isLoadCurrentGoods = useSelector(isLoadCurrentGoodsSelector);
  const modalState = useSelector(modalStateSeletor);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCurrentGoods(id || '0'));
  }, []);

  if (isLoadCurrentGoods && !modalState) {
    return <CustomSpinner />;
  }

  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
            gap="small"
          >
            <Box className="card-img">
              <img src={selectedGoods.productImage} alt={selectedGoods.title} />
            </Box>
            <Box className="card-content">
              <AddToFavorite id={id || 0} />
              <button
                className="btn btn-back"
                type="button"
                onClick={() => navigate('/')}
              >
                Go back
              </button>
              <span>id: {selectedGoods.id}</span>
              <span>{selectedGoods.title}</span>
              <span>{selectedGoods.price}₴</span>
              <span>Catagory: {selectedGoods.categories}</span>
              <span>Country: {selectedGoods.countries}</span>
            </Box>
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
