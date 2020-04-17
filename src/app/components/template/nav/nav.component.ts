import { ContatoService } from './../../../contato.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  progress: boolean = true;

  constructor(
    
    private _appService: ContatoService,
  ) { }

  ngOnInit(): void {
    this.listar()
  }

listar(){
  this._appService.getItems('api/pacientes/Listar').pipe(
    finalize(() =>{
      setTimeout(() => this.progress = false,200);
    })
    ).subscribe(dados => {
       console.log(dados);
     
     
    
    }, error => {
      
    });
}
}
