import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskForm } from './taskForm/task-form.component';
import { TaskTable } from './taskTable/task-table.component';
import { DialogBox } from './dialog/dialog-box.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';

import {MatFormFieldModule, 
        MatInputModule, 
        MatButtonModule, 
        MatPaginatorModule,
        MatIconModule,
        MatRadioModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSortModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: 'task-form', component: TaskForm },
  { path: 'task-table', component: TaskTable },
  { path: '',   redirectTo: '/task-form', pathMatch: 'full' },
  { path: '**', component: TaskForm }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskForm,
    TaskTable,
    DialogBox
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    HttpClientModule,
    MatRadioModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [DialogBox],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
