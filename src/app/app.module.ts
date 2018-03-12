import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';




/** COMPONENTS* */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownItemDirective } from './directives/dropdown-item.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    ResumeComponent,
    FooterComponent,
    DropdownItemDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : '', component: HomeComponent },
      { path : 'resume', component: ResumeComponent },
      { path : '**', component: NotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
