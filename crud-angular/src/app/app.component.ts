import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import { AnimalService } from './animal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pessoa-view';

  public animal: Animal = new Animal();

  public animais:Animal[] = [];

  constructor(private animalService: AnimalService){}

  ngOnInit(): void {
    this.listar();
  }

  public salvar(){
    console.log(this.animal);
    this.animalService.post(this.animal).subscribe(r => {
      this.listar();
      this.animal = new Animal();
    })
  }

  listar(){
    this.animalService.get().subscribe(r => {
      this.animais = r;
    })
  }

  deletar(id : any){
    console.log(this.animal);
    this.animalService.delete(id).subscribe(r => {
      this.listar();
    })
  }

  editar(animal : Animal) {
    this.animal.id = animal.id;
    this.animal.nome = animal.nome;
    this.animal.codigo = animal.codigo;
  }
}

