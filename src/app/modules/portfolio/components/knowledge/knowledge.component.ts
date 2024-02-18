import { Component, signal } from '@angular/core';
import { IKnowLedge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  //tipei na classe Knowledge-interface
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
        src: 'assets/icons/knowledge/html5.svg',
        alt: 'Icone de conhecimento de html5',
    },
    {
        src: 'assets/icons/knowledge/css3.svg',
        alt: 'Icone de conhecimento de CSS3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento de html5',
    },
    {
        src: 'assets/icons/knowledge/angular.svg',
        alt: 'Icone de conhecimento de CSS3',
    },
    // Adicione mais objetos conforme necessário
]);

}
