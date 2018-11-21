import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'blog-app';
  postes = [
 {
     titre: 'mon premier poste ',
   content: 'Le rêve est une «disposition de l\'esprit généralement nocturne,' +
   ' survenant au cours du sommeil, et qui procure à' +
   ' l\'individu éveillé des souvenirs nommés eux aussi rêves',
   loveIts: 2,
   created_at: new Date()

 } ,
    {
      titre: 'mon Deuxieme poste ',
      content: 'La robotique est l\'ensemble des techniques' +
      ' permettant la conception et la réalisation de machines' +
      ' automatiques ou des robots.',
      loveIts: -2,
      created_at: new Date()

    }

  ];



}
