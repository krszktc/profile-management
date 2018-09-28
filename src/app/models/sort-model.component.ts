export class Sort {
    private _active: string; 
    private _direction: string;
  
    constructor(active?: string, direction?: string) {
       this._active = active;
       this._direction= direction;
    }

    public set active(val: string) {
        this._active = val;
    }

    public get active(): string {
        return this._active;
    }

    public set direction(val: string) {
        this._direction = val;
    }

    public get direcion(): string {
        return this._direction;
    }

    public setDefault(): Sort {
        this._active = 'userId';
        this._direction = 'asc';
        return this;
    }

    public getSrotString(): string  {
        return 'sort=' + this._active + '&direction=' + this._direction;
    }


}    