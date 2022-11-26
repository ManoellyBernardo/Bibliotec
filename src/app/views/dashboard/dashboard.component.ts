import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetalhesComponent } from 'src/app/components/detalhes/detalhes.component';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns = ['leitor', 'titulo', 'dataEmprestimo', 'status', 'excluir', 'editar', 'detalhes', 'capa'];
  dataSource!: Livro[];

  constructor(
    private livroService: LivroService,
    private notification: NotificationService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initializeTable();
  }

  private initializeTable(): void {
    this.livroService.findAll().subscribe(livros => {
      this.dataSource = livros;
    });
  }

  public deleteLivro(id: string): void {
    this.livroService.deleteLivro(id).subscribe(response => {
      this.notification.showMessage("Apagado.");
      this.initializeTable();
    });
  }

  public openDetalhes(livros: Livro): void {
    this.dialog.open(DetalhesComponent, {
      width: "400px",
      data: livros
    });
  }
}
