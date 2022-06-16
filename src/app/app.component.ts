import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista-Arenas-Ana';
  show=true;
  
  listaAlumnos: any =[
    {nombre: "Jose Ramirez", codigo: "20220001", estado: "Aprobado"},
    {nombre: "Maria Guzman", codigo: "20220002", estado: "Aprobado"},
    {nombre: "Juana Rojas", codigo: "20220003", estado: "Desaprobado"},
    {nombre: "Katherine Ponce", codigo: "20220004", estado: "Aprobado"},
    {nombre: "Cesar Rodríguez", codigo: "20220005", estado: "Desaprobado"}
  ]

  showCode():void{
    this.show=!this.show;
  }
}
