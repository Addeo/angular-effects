import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  }
];

//TODO
const config: ExtraOptions = {
    useHash: false,
};

@NgModule({
    imports: [
        RouterModule.forRoot(routes, config),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
