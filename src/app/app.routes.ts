    import { RouterModule, Routes } from '@angular/router';
    import { Home } from './Components/home/home';
    import { About } from './Components/about/about';
    import { Contact } from './Components/contact/contact';
    import { Skills } from './Components/skills/skills';
    import { Resume } from './Components/resume/resume';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'skills', component: Skills },
    { path: 'resume', component: Resume },
];
