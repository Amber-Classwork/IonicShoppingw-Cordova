/* eslint-disable @typescript-eslint/quotes */
import { of } from "rxjs";

export interface Response<T>{
    status: string;
    message: string;
    data?: T;
}

export const handleHttpErrors = (data) => {console.log(data); return of(data);};
