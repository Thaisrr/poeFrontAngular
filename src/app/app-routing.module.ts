import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharacterDetailsComponent} from './pages/character-details/character-details.component';
import {CharactersListComponent} from './pages/characters-list/characters-list.component';


const routes: Routes = [
  {path: 'character/:id', component: CharacterDetailsComponent},
  {path: 'characters', component: CharactersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
