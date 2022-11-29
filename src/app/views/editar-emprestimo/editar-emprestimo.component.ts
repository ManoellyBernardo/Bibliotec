import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Leitor } from 'src/app/models/leitor';
import { EmprestimoService } from 'src/app/services/emprestimo.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  public formAtualizarEmprestimo: FormGroup;
  public statusList: string[] = ['DEVOLVIDO', 'PENDENTE']
  public emprestimo!: Leitor;

  constructor(
    private fb: FormBuilder,
    private emprestimoService: EmprestimoService,
    private notification: NotificationService,
    private router: Router
  ) {
    this.formAtualizarEmprestimo = fb.group({
      leitor: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      telefone: ["", [Validators.required]],
      status: ["", [Validators.required]],
      livro: ["", [Validators.required]]
    })
  }

  ngOnInit(): void {
    }

  public updateLending(formAtualizarEmprestimo: any): void {
      if(formAtualizarEmprestimo.valid) {
      this.emprestimoService.updateLending(this.emprestimo).subscribe(response => {
        this.notification.showMessage("Emprestimo atualizado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  }

}
