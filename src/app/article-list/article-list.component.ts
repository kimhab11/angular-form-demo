import {Component, OnInit} from '@angular/core';
import {IArticle} from "../shared/model/iarticle";
import {ArticleService} from "../shared/services/arrticle.service";
import {filter, map, of} from "rxjs";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  article_list!: IArticle[];

  squareOf2$ = of(1, 2, 3, 4, 5, 6).pipe(filter(num => num % 2 === 0), map(num => num * num));

  constructor(private _articleService: ArticleService) {
  }

  ngOnInit(): void {

   // this.article_list = this._articleService.article;

    this._articleService.articleObs$.subscribe((article) => {
      this.article_list = article;
    });

    this.squareOf2$.subscribe((num) => console.log(num));
  }

}
