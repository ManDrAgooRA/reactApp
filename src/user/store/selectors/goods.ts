export const allGoodsSelector = (state: any) => state.goods.allGoods;
export const goodsSelector = (state: any) => state.goods.goods;
export const goodsMaxSearchPriceSelector = (state: any) =>
  state.goods.maxSearchPrice;
export const selectedGoodsSelector = (state: any) => state.goods.selectedGoods;
export const isLoadCurrentGoodsSelector = (state: any) =>
  state.goods.isLoadCurrentGoods;
export const isLoadAllGoodsSelector = (state: any) =>
  state.goods.isLoadAllGoods;
export const isLoadGoodsSelector = (state: any) => state.goods.isLoadGoods;
export const goodsSortSelector = (state: any) => state.goods.sort;
export const goodsOrderSelector = (state: any) => state.goods.order;
export const goodsMinPriceSelector = (state: any) => state.goods.minPrice;
export const goodsMaxPriceSelector = (state: any) => state.goods.maxPrice;
export const goodsCountriesSelector = (state: any) => state.goods.countries;
export const goodsCategoriesSelector = (state: any) => state.goods.categories;
export const goodsCurrentMaxPriceSelector = (state: any) =>
  state.goods.currentMaxPrice;
export const goodsModalState = (state: any) => state.goods.isOpenModal;
