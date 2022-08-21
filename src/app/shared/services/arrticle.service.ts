import {Injectable} from '@angular/core';
import {IArticle} from "../model/iarticle";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  // create observable
  articleObs$ = new Observable<IArticle[]>();

  article: IArticle[] = [
    {
      id: Math.random(),
      title: 'Hello',
      description: 'here hello'
    },
    {
      id: Math.random(),
      title: 'Hello1',
      description: 'here hello1'
    },
    {
      id: Math.random(),
      title: 'Hello2',
      description: 'here hello2'
    }
  ]

  constructor() {
    this.articleObs$ = of(this.article);

  }
}
