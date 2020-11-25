import { Routes } from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { PaisComponent } from './components/pais/pais.component';
import { PeruComponent } from './components/peru/peru.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [


    { path: '', redirectTo: 'aplicacion', pathMatch: 'full' },

    {
        path: 'aplicacion',
        component: MainComponent,
        children:[
            { path: 'pais', component: PaisComponent },
            { path: 'peru', component: PeruComponent },
        ]
        
    },

    { path: '**', redirectTo: 'aplicacion' }
];