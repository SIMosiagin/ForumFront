import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {RestService} from "./service/rest.service";
import {TokenService} from "./service/token.service";
import { ForumTopicComponent } from './forum-topic/forum-topic.component';
import { ForumPostComponent } from './forum-post/forum-post.component';
import { AddTopicComponent } from './forum-topic/add-topic/add-topic.component';
import { AddPostComponent } from './forum-post/add-post/add-post.component';
import { ProfileComponent } from './profile/profile.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import {StorageEntityService} from "./storage-entity/storage-entity.service";
import {AuthInterceptorService} from "./service/auth-interceptor.service";
import { NaviBarComponent } from './navi-bar/navi-bar.component';
import {AuthServiceService} from "./service/auth-service.service";





const routes  = [
  {path: '', component: SigninComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forum/topics', component: ForumTopicComponent},
  {path: 'forum/topics/selectedTopic', component: ForumPostComponent},
  {path: 'forum/editUser', component: EditUsersComponent},
 // {path: 'forum/post', component: ForumPostComponent},
  {path: 'forum/post', component: AddPostComponent},
  {path: 'forum/profile', component: ProfileComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    ForumTopicComponent,
    ForumPostComponent,
    AddTopicComponent,
    AddPostComponent,
    ProfileComponent,
    EditUsersComponent,
    NaviBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),

  ],
  providers: [RestService, TokenService, StorageEntityService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, AuthServiceService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
