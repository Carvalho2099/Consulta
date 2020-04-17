import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
//import { Router } from '@angular/router';



@Injectable()
export class ContatoService {
  apiUrl = 'https://localhost:44303/';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    ) { }
  
  getItems(caminho): Observable<any> {
    return this.http.get(this.apiUrl + `${caminho}`)

    //.map(res => { return res });
  }
  postItems(caminho, objeto): Observable<any> {
    return this.http.post(this.apiUrl + `${caminho}`, objeto);
  }
  showMensage(msg: string):void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top",
    })
  }
}
