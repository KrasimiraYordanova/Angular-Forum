import { IPost } from "./post";
import { ITheme } from "./theme";

export interface IUser {
    themes: ITheme[];
    posts: IPost[];
    _id: string;
    tel: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
    updated_at: string;
    __v: number;
}