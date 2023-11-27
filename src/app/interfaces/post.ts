import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
    likes: string[],
    _id: string;
    text: string;
    userId: IUser;
    themeId: ITheme;
    created_at: string;
    updated_at: string;
    __v: number;
}