import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-editar-emprestimo',
  templateUrl: './editar-emprestimo.component.html',
  styleUrls: ['./editar-emprestimo.component.css']
})
export class EditarEmprestimoComponent implements OnInit {

  public formAtualizarEmprestimo: FormGroup;
  public statusList: string[] = ['DEVOLVIDO', 'PENDENTE']
  public livro!: Livro;

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
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
      this.livroService.updateLivro(this.livro).subscribe(response => {
        this.notification.showMessage("Atualizado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  }

}
