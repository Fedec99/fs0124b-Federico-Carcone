import { iTodo } from "./todo";
import { iUser } from "./user";

export interface iFusion{
    [key: number]: iTodo & iUser
}
