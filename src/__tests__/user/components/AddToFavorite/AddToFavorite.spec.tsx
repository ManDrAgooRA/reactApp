import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { AddToFavorite } from '@/user/components/AddToFavorite/AddToFavorite';
import { store } from '@/user/store';
import '@/__tests__/config/setupTests';

const handleMount = () => {
  return mount(
    <Provider store={store}>
      <AddToFavorite id={1} />
    </Provider>
  );
};

const handleShallow = () => {
  return shallow(
    <Provider store={store}>
      <AddToFavorite id={1} />
    </Provider>
  );
};

describe('AddToFavorite', () => {
  it('should have props id', () => {
    const shallowComponent = handleShallow();
    expect(shallowComponent.find('AddToFavorite').props().id).toBe(1);
  });

  it('should have button', () => {
    const shallowComponent = handleShallow();
    expect(shallowComponent.exists()).toBe(true);
  });

  it('should have change state function', () => {
    const mounComponent = handleMount();
    expect(mounComponent.find('.product-favorite-icon').length).toBe(4);
    mounComponent.find('.btn-product-favorite').simulate('click');
    expect(mounComponent.find('.product-favorite-icon__active').length).toBe(4);
  });
});
