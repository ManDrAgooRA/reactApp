import { IUser } from '@/interfaces';

export const getUniqueEmail = ({
  currentUserId,
  newEmail,
  userList,
}: {
  currentUserId: number;
  newEmail: string;
  userList: IUser[];
}) => {
  return userList.find(
    (item) => item.email === newEmail && item.id !== currentUserId
  );
};
