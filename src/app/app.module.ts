import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { ReceipesComponent } from './receipes/receipes.component';
import { Receipes } from './receipes/receipes.list/receipes.list.component';
import { Receipes } from './receipes/receipes.detail/receipes.detail.component';
import { Receipes } from './receipes/receipes.list/receipes.item/receipes.item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ReceipesListComponent } from './receipes/receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from './receipes/receipes-detail/receipes-detail.component';
import { ReceipesItemComponent } from './receipes/receipes-list/receipes-item/receipes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    ReceipesComponent,
    Receipes.ListComponent,
    Receipes.DetailComponent,
    Receipes.ItemComponent,
    ShoppingListComponent,
    ReceipesListComponent,
    ReceipesDetailComponent,
    ReceipesItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
