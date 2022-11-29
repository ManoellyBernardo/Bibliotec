import { NotificationService } from './notification.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Leitor } from '../models/leitor';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(
    private firestore: AngularFirestore,
    private notification: NotificationService
  ) { }

  public createLending(emprestimo: Leitor): Observable<any> {
    const promise = this.firestore.collection("emprestimos").add(emprestimo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao cadastrar novo emprestimo.");
        console.error(error);
        return EMPTY;
      })
    );
  }

  public findAll(): Observable<any> {
    const promise = this.firestore.collection("emprestimos").get();
    return from(promise).pipe(
      map((response: any) => {
        return response.docs.map((doc: any) => {
          const emprestimo: Leitor = doc.data() as Leitor;
          emprestimo.id = doc.id;
          return emprestimo;
        })
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar dados.");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public findById(id: string): Observable<any> {
    const promise = this.firestore.collection("emprestimos").doc(id).get();
    return from(promise).pipe(
      map(doc => {
        const emprestimo: Leitor = doc.data() as Leitor;
          emprestimo.id = doc.id;
          return emprestimo;
      }),
      catchError(error => {
        this.notification.showMessage("Erro ao buscar emprestimo pelo id");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public deleteLending(id: string) {
    const promise = this.firestore.collection("emprestimos").doc(id).delete();
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao excluir emprestimo.");
        console.error(error);
        return EMPTY;
      })
    )
  }

  public updateLending(emprestimo: Leitor) {
    const promise = this.firestore.collection("livros").doc(emprestimo.id).update(emprestimo);
    return from(promise).pipe(
      catchError(error => {
        this.notification.showMessage("Erro ao atualizar emprestimo.");
        console.error(error);
        return EMPTY;
      })
    )
  }
}
