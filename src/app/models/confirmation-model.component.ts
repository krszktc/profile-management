export class Confirmation {
    private _answer: string;
    private _comment: string;
  
    constructor(answer: string, comment: string) {
        this._answer = answer;
        this._comment = comment;
    }

    public set answer(val: string) {
        this._answer = val;
    }

    public get answer(): string {
        return this._answer;
    }

    public set comment(val: string) {
        this._comment = val;
    }

    public get comment(): string {
        return this._comment;
    }
}