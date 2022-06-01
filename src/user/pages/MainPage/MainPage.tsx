import React, { FC } from 'react';
import { Grommet, Grid, ResponsiveContext } from 'grommet';
import { Sidebar } from '@/sharedComponents/Sidebar/Sidebar';
import { Sort } from '@/user/components/Sort/Sort';
import { FilterBy } from '@/user/components/Filters/FilterBy/FilterBy';
import { FILTERS } from '@/constants';
import { FilterByPrice } from '@/user/components/Filters/FilterByPrice/FilterByPrice';
import { ProductList } from '@/user/components/ProductList/ProductList';
import './mainPage.scss';

export const MainPage: FC = () => {
  return (
    <Grommet>
      <ResponsiveContext.Consumer>
        {(size) => (
          <Grid
            columns={size !== 'small' ? ['1/4', 'flex'] : ['full']}
            gap="small"
            className="main"
          >
            <Sidebar>
              <Sort />
              {FILTERS.map((item) => {
                return <FilterBy key={item.name} filterName={item.name} />;
              })}
              <FilterByPrice />
            </Sidebar>
            <ProductList />
          </Grid>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
};
