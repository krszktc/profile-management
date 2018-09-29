import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, 
        MatSort, MatDialog, MatDialogConfig } from '@angular/material';
import { DataService } from '../services/data.service';
import { Page } from '../models/page-model.component';
import { Request } from '../models/request-model.component';
import { Sort } from '../models/sort-model.component';
import { Confirmation } from '../models/confirmation-model.component';
import { DialogBox } from '../dialog/dialog-box.component';

@Component({
  selector: 'task-table',
  templateUrl: 'task-table.component.html',
  styleUrls: ['task-table.component.css']
})
export class TaskTable implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private DATA_REST = 'server_request_path';
  private RADIO_LABEL = 'ALL';
  private DISPLAY_COLUMNS = ['requestId', 'status', 'firstName', 
                              'lastName', 'email', 'idNumber', 
                              'city', 'comment', 'buttons'];
  private dataSource: MatTableDataSource<Request>;
  private searchFilter: string;
  private sortColumn: Sort;
  private page: Page;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getMockData();
    this.page = new Page().setDetaulf();
    this.sortColumn = new Sort().setDefault();
  }

  private getMockData(filter?: string) {
    let mockRequest: Request[];
    this.paginator.firstPage();
    if (filter && filter !== 'ALL') {
      mockRequest = this.dataService
                        .getMockRequests()
                        .filter(el => el.status === filter);
    } else {
      mockRequest = this.dataService.getMockRequests();
    }
    this.dataSource = new MatTableDataSource<Request>(mockRequest);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.searchFilter = '';
  }

  private accept(request: Request) {
    this.confirmtAction(request, 'APPROVED');
  }

  private reject(request: Request) {
    this.confirmtAction(request, 'REJECTED');
  }

  private confirmtAction(request: Request, status: string) {
    const dialogConfig = new MatDialogConfig();
          dialogConfig.data = status;
    const dialogRef = this.dialog.open(DialogBox, dialogConfig);
    dialogRef.afterClosed().subscribe((result: Confirmation) => {
      if(result && result.answer === 'YES') {
        request.status = status;
        request.comment = result.comment;
        this.getMockData(this.RADIO_LABEL);
      }
    });
  }

  private disableButton(request: Request): boolean {
    return request.status !== 'OPEN';
  }

  // *** for server request
  private getData() {
    const url = this.DATA_REST + this.page.getPageString + this.sortColumn.getSrotString();
    this.dataService.getRequests(url).subscribe(res => {
        if (res.content && res.content.length > 0) {
          // set page and conent
        }
    });
  }

  private filter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

  private pateChange(page: Page){
    this.page = page;
  }

  private sortChange(sort: Sort) {
    this.sortColumn = sort;
  }
}

