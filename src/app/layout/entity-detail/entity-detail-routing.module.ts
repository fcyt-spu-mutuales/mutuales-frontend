import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntityDetailComponent } from './entity-detail.component';

const routes: Routes = [
    {
        path: '',
        component: EntityDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntityDetailRoutingModule {}
