import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto Vida FullStack',
      title: 'Vida FullStack',
      with: '100px',
      height: '51px',
      description:
        '',
      links: [
        {
          name: 'Conheça o Blog',
          href: '',
        },
      ],
    },
  ]);}
