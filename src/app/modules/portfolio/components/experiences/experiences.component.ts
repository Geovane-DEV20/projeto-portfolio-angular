import { Component, signal } from '@angular/core';

//interface
import { IExperiences } from '../../interface/IExperiences.Interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Engenheiro de Software',
        p: 'Avanade | Set 2023 - Presente  '
      },
      text: "<p>Teste</p>"
    }
  ])
}
