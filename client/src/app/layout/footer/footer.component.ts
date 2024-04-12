import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenubarModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  gitHubUrl: string;
  linkedInUrl: string;
  currentYear: number;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  name: string;

  constructor() {
    this.gitHubUrl = 'https://github.com/jordanpapaditsas';
    this.currentYear = new Date().getFullYear();
    this.linkedInUrl = 'https://www.linkedin.com/in/ipapaditsas/';
    this.name = 'Jordan Papaditsas';
  }
}
