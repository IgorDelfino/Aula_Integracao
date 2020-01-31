import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  arrayPost = [
    {
      nome_usuario: 'Carol',
      serie: 'His Dark Materials',
      is_liked: true,
      is_disliked: false,
      num_likes: 10,
      num_dislikes: 17,
      spoiler: true,
      conteudo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
    },
    {
      nome_usuario: 'Conde',
      serie: 'The Witcher',
      is_liked: true,
      is_disliked: false,
      num_likes: 7,
      num_dislikes: 11,
      spoiler: false,
      conteudo: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
    },
    {
      nome_usuario: 'Igor',
      serie: 'Sex Education',
      is_liked: true,
      is_disliked: false,
      num_likes: 21,
      num_dislikes: 1,
      spoiler: true,
      conteudo: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and'
    },
    {
      nome_usuario: 'Tef',
      serie: 'Greys Anatomy',
      is_liked: true,
      is_disliked: false,
      num_likes: 21,
      num_dislikes: 1,
      spoiler: false,
      conteudo: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    },
  ];

  constructor() {}

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
