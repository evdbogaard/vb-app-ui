import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './character/character-list.component';
import { CharacterComponent } from './character/character.component';

const routes: Routes = [
    {
        path: 'characters', 
        children: [
            { path: 'overview', component: CharacterListComponent },
            { path: ':id', component: CharacterComponent }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
