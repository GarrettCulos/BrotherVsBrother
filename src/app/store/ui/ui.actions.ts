export const ADD_LOADING = '[ ui ] add loading';
export const REMOVE_LOADING = '[ ui ] remove loading';

export const ADD_ERROR = '[ ui ] add error';
export const REMOVE_ERROR = '[ ui ] remove error';

export class AddLoading {
    type = ADD_LOADING;
    constructor(public loadType: string, public data: any) {}
}

export class RemoveLoading {
    type = REMOVE_LOADING;
    constructor(public id: string) {}
}

export class AddError {
    type = ADD_ERROR;
    constructor(public errorType: string, public data: any) {}
}

export class RemoveError {
    type = REMOVE_ERROR;
    constructor(public id: string) {}
}
