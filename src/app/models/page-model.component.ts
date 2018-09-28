export class Page {
    private _previousPageIndex: number; 
    private _pageIndex: number;
    private _pageSize: number;
    private _length: number;
  
    constructor(previousPageIndex?: number, pageIndex?: number, pageSize?: number, length?: number) {        
        this._previousPageIndex = previousPageIndex;
        this._pageIndex = pageIndex;
        this._pageSize = pageSize;
        this._length = length;
    }

    public set previousPageIndex(val: number) {
        this._previousPageIndex = val;
    }

    public get previousPageIndex(): number {
        return this._previousPageIndex;
    }

    public set pageIndex(val: number) {
        this._pageIndex = val;
    }

    public get pageIndex(): number {
        return this._pageIndex;
    }

    public set pageSize(val: number) {
        this._pageSize = val;
    }

    public get pageSize(): number {
        return this._pageSize;
    }

    public set length(val: number) {
        this._length = val;
    }

    public get length(): number {
        return this._length;
    }

    public setDetaulf(): Page {
        this._pageIndex = 0;
        this._pageSize = 5;
        return this;
    }

    public getPageString(): string {
        return 'page=' + this._pageIndex + '&limit=' + this._pageSize;
    }
    
}    