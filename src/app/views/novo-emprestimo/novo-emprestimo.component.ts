import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-novo-emprestimo',
  templateUrl: './novo-emprestimo.component.html',
  styleUrls: ['./novo-emprestimo.component.css']
})
export class NovoEmprestimoComponent implements OnInit {

  public formNovoEmprestimo: FormGroup;
  public livro!: Livro;
  public statusList: string[] = ['DEVOLVIDO', 'PENDENTE']

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private notification: NotificationService,
    private router: Router
    ) {
      this.formNovoEmprestimo = fb.group({
        leitor: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        telefone: ["", [Validators.required]],
        status: ["", [Validators.required]],
        livro: ["", [Validators.required]]
      }) 
     }

  ngOnInit(): void {
  }

  public createLending(): void {
    if(this.formNovoEmprestimo.valid) {
      const livroEmprestimo: Livro = this.formNovoEmprestimo.value;
      this.livroService.createLivro(livroEmprestimo).subscribe(response => {
        this.notification.showMessage("Novo empréstimo cadastrado com sucesso.");
        this.router.navigate(["/dashboard"]);
      });
    }
    else {
      this.notification.showMessage("Dados inválidos.");
    }
  }

}
