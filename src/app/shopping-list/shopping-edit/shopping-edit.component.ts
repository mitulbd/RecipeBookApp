



import { Subscription } from 'rxjs/Rx';
import { ShoppingListService } from '../../servces/shopping-list.service';
import { Ingredient } from '../../models/indredient.model';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f')slform:NgForm;
  subscription:Subscription;
  editMode=false;
  editItemIdex:number;


  editItem:Ingredient={name:'',amount:0};
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() {
      this.subscription=this.shoppingService.startEditing.subscribe((index:number)=>{
      this.editItemIdex=index;
      this.editMode=true;
      this.editItem=this.shoppingService.getIngredientnyId(index);
      this.slform.setValue({
        name: this.editItem.name,
        amount: this.editItem.amount
      })


    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onSubmit(form:NgForm){
   const value=form.value;
   this.editItem=new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.shoppingService.edit(new Ingredient(value.name,value.amount),this.editItemIdex);
    }else{
      this.shoppingService.save(new Ingredient(value.name,value.amount));
    }
    form.reset();
    this.editMode=false;
  }
  clear(){
    this.slform.reset();
    this.editMode=false;
  }
  onDelete(){
    console.log(this.editItemIdex);
    this.shoppingService.delete(this.editItemIdex);
    this.clear();
  }
}

