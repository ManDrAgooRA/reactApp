import { TGoodsUser } from '@/admin/interfaces';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getTableColumns = (firstItem: TGoodsUser) => {
  let columns;

  if (firstItem) {
    columns = Object.keys(firstItem).map((item) => {
      if (item === 'password') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item}`),
          render: (datum: TGoodsUser) =>
            `${datum.password.slice(datum.password.length - 5)}...`,
        };
      }
      if (item === 'productImage') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item}`),
          render: (datum: TGoodsUser) =>
            `${datum.productImage.slice(datum.productImage.length - 5)}...`,
        };
      }
      if (item === 'isSale') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item}`),
          render: (datum: TGoodsUser) => `${datum.isSale}`,
        };
      }

      if (item === 'isFavorite') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item}`),
          render: (datum: TGoodsUser) => `${datum.isFavorite}`,
        };
      }

      if (item === 'cart') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item} value`),
          render: (datum: TGoodsUser) => `${datum.cart?.length}`,
        };
      }

      if (item === 'favorites') {
        return {
          property: `${item}`,
          header: capitalizeFirstLetter(`${item} value`),
          render: (datum: TGoodsUser) => `${datum.favorites?.length}`,
        };
      }

      return {
        property: `${item}`,
        header: capitalizeFirstLetter(`${item}`),
      };
    });
  }

  return columns;
};
