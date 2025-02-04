import { HomeComponent } from './../Components/User/home/home.component';
import { AboutComponent } from './../Components/User/about/about.component';
import { ContactComponent } from './../Components/User/contact/contact.component';
import { CaseStudiesComponent } from './../Components/User/case-studies/case-studies.component';
import { ServicesComponent } from '../Components/User/services/services.component';
import { NotfoundComponent } from '../Components/User/notfound/notfound.component';
import { CaseDetailsComponent } from '../Components/User/case-details/case-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'case-studies', component: CaseStudiesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'case-details', component: CaseDetailsComponent },
    { path: '**', component: NotfoundComponent },

];
@NgModule({
    imports: [RouterModule.forRoot(routes ,{useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
