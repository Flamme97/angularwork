import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';
import { Comments } from './comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit {
  comments$ = this.commentService.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'));
  comments: any;
  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.comments = data['comments'])}
}
