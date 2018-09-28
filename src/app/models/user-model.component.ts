export class User {
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _idNumber: string;
    private _city: string;
  
    constructor(firstName: string, lastName: string, email: string, idNumber: string, city: string) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._idNumber = idNumber;
        this._city = city
    }
  
    public set firstName(val: string) {
        this._firstName = val;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set lastName(val: string) {
        this._lastName = val;
    }

    public get lastName(): string {
        return this._lastName;
    }
  
    public set email(val: string) {
        this._email = val;
    }

    public get email(): string {
        return this._email;
    }

    public set idNumber(val: string) {
        this._idNumber = val;
    }

    public get idNumber(): string {
        return this._idNumber;
    }
  
    public set city(val: string) {
        this._city = val;
    }

    public get city(): string {
        return this._city;
    }

    public getUrl(): string {
        return '?firstName=' + this._firstName +
                '&lastName=' + this._lastName +
                '&email=' + this._email +
                '&idNumber=' + this._idNumber +
                '&city=' + this._city;
    }

  }
  