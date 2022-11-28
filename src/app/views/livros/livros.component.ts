import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {

  public livrosList!: Livro[];

  constructor() { }

  ngOnInit(): void {
  }

}
