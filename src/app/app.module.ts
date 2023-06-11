import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'projects/designsystem/src/stories/buttons.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    NgxPaginationModule,
    FormsModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
