import { HttpClient } from '@angular/common/http';
import { ContatoService } from './../../../contato.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  progress: boolean = true;
  totalPacientes = [];
  atendidos = [];
  naoAtendidos = [];
  paciente = [];
  id: number;
  nome: string = "";
  consulta: any;
  textoconsulta: string = "";
  esconderBotao: boolean = false;

  constructor(
    private _appService: ContatoService,
    private hhtp: HttpClient
  ) { }

  ngOnInit(): void {
    this.listar()
  }

  listar() {
    this._appService.getItems('api/pacientes/Listar').pipe(
      finalize(() => {
        setTimeout(() => this.progress = false, 200);
      })
    ).subscribe(dados => {
      if (dados.length > 0) {
        this.totalPacientes = dados;
        this.atendidos = this.totalPacientes.filter(itens => itens.consulta != null);
        this.naoAtendidos = this.totalPacientes.filter(itens => itens.consulta == null);
      } else {
        this.totalPacientes = [];
        this.atendidos = [];
        this.naoAtendidos = [];
      }
    }, error => {
      this._appService.showMensage('Falha o buscar pacientes.')

    });
  }

  verConsulta(item){
    this.textoconsulta = item.consulta;
    this.nome = item.nomePaciente;
    this.esconderBotao = false;
  }
  novaConsulta(item){
    this.textoconsulta = "";
    this.nome = item.nomePaciente;
    this.id = item.id;
    this.esconderBotao = true;
  }
  salvarConsulta(){
    this.consulta = document.getElementById('consulta').nodeValue;
    let obj = {nomePaciente: this.nome, id: this.id, consulta: this.consulta}
    this._appService.postItems('api/pacientes/CadastrarConsulta', obj).pipe(
      finalize(() => {
        //setTimeout(() => this.progress = false, 200);
      })
    ).subscribe(dados => {
    }, error => {
      // this._toastr.error('Falha ao buscar as Solicitações de Cancelamento - ' + error.error, "Erro");
    });
  }
}
