export const checkFavoriteId = ({
  favoriteList,
  favoriteId,
}: {
  favoriteList: number[];
  favoriteId: number;
}) => {
  return favoriteList.some((item: number) => item === favoriteId);
};
