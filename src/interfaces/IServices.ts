import { IRequestBodyAdmin } from '@/admin/interfaces';
import { IUser } from '@/interfaces';

export type IRequestBody = IUser | IRequestBodyAdmin;
