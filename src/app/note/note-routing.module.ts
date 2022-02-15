import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'note',redirectTo:'note/index',pathMatch:'full'},
  {path:'note/index',component:IndexComponent},
  {path:'note/:noteId/view',component:ViewComponent},
  {path:'note/create',component:CreateComponent},
  {path:'note/:noteId/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteRoutingModule { }
