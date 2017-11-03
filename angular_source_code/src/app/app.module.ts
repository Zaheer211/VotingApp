import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { PollDataService } from './services/poll-data.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {ShareButtonsModule} from 'ngx-sharebuttons';
// import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PollsComponent } from './components/polls/polls.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { RenderPollsComponent } from './components/render-polls/render-polls.component';

const appRoutes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path: 'showAllPolls',
    component: RenderPollsComponent
  },
  {
    path : 'polls/:id',
    component : PollsComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-poll/:userId',
    component: CreatePollComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PollsComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    CreatePollComponent,
    RenderPollsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    // Router,
    RouterModule.forRoot(appRoutes),
    ShareButtonsModule.forRoot()
  ],
  providers: [ PollDataService, UserService, AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
