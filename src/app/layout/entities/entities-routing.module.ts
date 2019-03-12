import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityComponent } from './entities.component';

const routes: Routes = [
    {
        path: '',
        component: EntityComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntitiesRoutingModule {}
