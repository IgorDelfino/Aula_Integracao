import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.scss'],
})
export class FavsComponent implements OnInit {
  /** Post default **/
  @Input() public Post = {
  	nome_usuario: 'carregando nome...',
    serie: 'carregando serie...',
    is_liked: true,
    is_disliked: true,
    num_likes: 0,
    num_dislikes: 0,
    spoiler: false,
    conteudo: ''
  }

  constructor() { }

  ngOnInit() {}

  
  likeOrUnlike(Post) {

    if (Post.is_liked) {
      Post.num_likes--;
      Post.is_liked = false;
      Post.num_dislikes++;
    } else {
      Post.num_likes++;
      Post.is_liked = true;
      Post.num_dislikes--;
    }
  }

}
