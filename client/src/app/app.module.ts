import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PrimeNgModuleLoaders} from './primeng-imports';
import {HttpClientModule} from '@angular/common/http';


const config: SocketIoConfig = {url: '/', options: {}};


// pages
import {ChatComponent} from './components/chat/chat.component';
import {RoomsComponent} from './components/rooms/rooms.component';
import {LoginComponent} from './components/login/login.component';
// components
import {ChatWindowComponent} from './components/chat/components/chat-window/chat-window.component';
import {MessageComponent} from './components/chat/components/message/message.component';
import {ChatInputComponent} from './components/chat/components/chat-input/chat-input.component';
import {UsersListComponent} from './components/chat/components/users-list/users-list.component';
// providers
import {ChatRoomsService} from './services/chat-rooms-service';
import {LoginService} from './services/login-service';
import {FormBuilder} from '@angular/forms';
import {SigninComponent} from './components/login/componenets/signin/signin.component';
import {SignupComponent} from './components/login/componenets/signup/signup.component';
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    RoomsComponent,
    LoginComponent,
    MessageComponent,
    ChatWindowComponent,
    ChatInputComponent,
    UsersListComponent,
    SigninComponent,
    SignupComponent,
    NotFoundComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    PrimeNgModuleLoaders,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [ChatRoomsService, FormBuilder, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
