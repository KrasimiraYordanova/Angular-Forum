import { IPost } from "./post";
import { IUser } from "./user";

export interface ITheme {
    themeName: string;
    subscribers: string[];
    userId: IUser;
    posts: IPost[];
}