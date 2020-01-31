import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
	arrayPost = [
    {
      nome_usuario: 'Batata',
      serie: 'Sherlock Holmes',
      is_liked: false,
      is_disliked: false,
      num_likes: 29,
      num_dislikes: 2,
      spoiler: true,
      conteudo: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. "
    },
    {
      nome_usuario: 'Vini',
      serie: 'Vikings',
      is_liked: true,
      is_disliked: true,
      num_likes: 48,
      num_dislikes: 9,
      spoiler: false,
      conteudo: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      nome_usuario: 'Filipim',
      serie: 'Code Case (??)',
      is_liked: true,
      is_disliked: false,
      num_likes: 3,
      num_dislikes: 0,
      spoiler: true,
      conteudo: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      nome_usuario: 'Gabizinha',
      serie: 'The Flash',
      is_liked: false,
      is_disliked: true,
      num_likes: 31,
      num_dislikes: 17,
      spoiler: false,
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
