export const getChangedList = ({
  favoriteList,
  id,
  isFavorite,
}: {
  favoriteList: number[];
  id: number;
  isFavorite: boolean;
}) => {
  return isFavorite
    ? favoriteList.filter((item: number) => item !== id)
    : [...favoriteList, +id];
};
