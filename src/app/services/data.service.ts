import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user-model.component';
import { Request } from '../models/request-model.component';
     
@Injectable()
export class DataService {

    private ID: number = 1122;
    private STATUS: string = 'OPEN';
    private COMMENT: string = '';
    private mockRequests: Request[] = [];

    constructor(private http: HttpClient) {
        this.mockRequests.push(new Request(331, 'OPEN', '', 
            new User('Nasda', 'Sasdas','adad@casd.cad','2133/4324/22', 'Dasd asda')));
        this.mockRequests.push(new Request(431, 'REJECTED', 'rejected comment', 
            new User('Sasdads', 'Jsdas','fdfsd@fsdd.aa','3432/6452/11', 'Msadfs'))); 
        this.mockRequests.push(new Request(431, 'OPEN', '', 
            new User('Isdfsdfg', 'Isda','ffdk@fs.cam','5674/4331/22', 'Hfdsda')));     
        this.mockRequests.push(new Request(102, 'APPROVED', '', 
            new User('Sfsda', 'Hfdsd','sfks@fsd.cs','1234/4534/51', 'Ysdfas')));      
        this.mockRequests.push(new Request(1120, 'OPEN', '', 
            new User('Asdf', 'Stesa','das@fds.cc','7652/3422/21', 'Ufssaa')));  
        this.mockRequests.push(new Request(231, 'OPEN', '', 
            new User('Sfsf', 'Isfds','dasd@csad.cc','3454/3453/11', 'Dasd asda')));
        this.mockRequests.push(new Request(1011, 'REJECTED', 'dadas dasdadasd', 
            new User('Gsdfa', 'Fdfd','fddd@dsf.ca','3243/3432/21', 'Msadfs'))); 
        this.mockRequests.push(new Request(999, 'REJECTED', 'sfgkdgg df dsaas', 
            new User('Idfsdffs', 'Pdfsd','dfsd@fs.ca','1234/3211/23', 'Hfdsda')));     
    }

    public getMockRequests(): Request[] {
        return this.mockRequests;
    }

    public addMockRequest(user: User) {
        const request: Request = new Request(this.ID, this.STATUS, this.COMMENT, user);
        this.mockRequests.push(request);
        this.ID++;
    }

    // *** for server request
    public getRequests(url: string): Observable<any> {
        return this.http.get(url);
    }

    public createUser(url: string, user: User): Observable<any> {
        return this.http.post(url, user);
    }

}