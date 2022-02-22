import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character/character-list.component';

const routes: Routes = [
    {
        path: 'characters', 
        children: [
            { path: 'overview', component: CharacterListComponent }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
