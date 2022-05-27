import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Professor } from './../models/Professor';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Lauro', disciplina: 'Matematica' },
    { id: 2, nome: 'Roberto', disciplina: 'Fisica' },
    { id: 3, nome: 'Ronaldo', disciplina: 'Portugues' },
    { id: 4, nome: 'Rodrigo', disciplina: 'Ingles' },
    { id: 5, nome: 'Alexandre', disciplina: 'Programação' },
  ]



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm(){
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    })
  }

  professorSubmit(){
    console.log(this.professorForm.value)
  }

  professorSelect(professor: Professor){
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor)
  }

  voltar(){
    this.professorSelecionado = null;
  }

}
