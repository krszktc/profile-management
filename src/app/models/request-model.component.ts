import { User } from './user-model.component'

export class Request extends User{
    private _requestId: number;
    private _status: string;
    private _comment: string;
  
    constructor(requestId: number, status: string, comment: string, user: User) {
        super(user.firstName, user.lastName, user.email, user.idNumber, user.city);
        this._requestId = requestId;
        this._status = status;
        this._comment = comment;
    }

    public set requestId(val: number) {
        this._requestId = val;
    }

    public get requestId(): number {
        return this._requestId;
    }

    public set status(val: string) {
        this._status = val;
    }

    public get status(): string {
        return this._status;
    }

    public set comment(val: string) {
        this._comment = val;
    }

    public get comment(): string {
        return this._comment;
    }
}    