import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent {
  projects = [
    {
      title: 'Join',
      undertitle: 'JavaScript | HTML | CSS | Backend',
      description: 'A Kanban Project Management Web-App. Create tasks, assign users and categories, and change task status by simply using drag-and-drop.',
      image: '/assets/img/join.png',
      category: 'javascript',
      tryIt: 'https://hosny-fahim.developerakademie.net/join/',
      git: 'https://github.com/HosnyFahim/join'
    },
    {
      title: 'El Pollo Loco',
      undertitle: 'OPP | JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens.',
      image: '/assets/img/pollo-loco.png',
      category: 'javascript',
      tryIt: 'https://example.com/pollo-loco',
      git: 'https://github.com/example/pollo-loco'
    },
    {
      title: 'Pokedex',
      undertitle: 'API | Bootstrap | JavaScript | HTML | CSS',
      description: 'Pocket-Monster-Deck" using Rest API',
      image: '/assets/img/pokedex.png',
      category: 'javascript',
      tryIt: 'https://example.com/pokedex',
      git: 'https://github.com/example/pokedex'
    },
    {
      title: 'Ring of Fire',
      undertitle: 'Angular | TypeScript | Firebase | HTML | SCSS',
      description: 'Famous Drinking-Game Online',
      image: '/assets/img/ring-of-fire.png',
      category: 'angular',
      tryIt: 'https://example.com/ring-of-fire',
      git: 'https://github.com/example/ring-of-fire'
    },
    {
      title: 'Portfolio',
      undertitle: 'Angular | TypeScript | HTML | SCSS',
      description: 'My personal website.',
      image: '/assets/img/portfolio.png',
      category: 'angular',
      git: 'https://github.com/HosnyFahim/my-portfolio'
    }
  ];

  activeButton = 'all';

  get filteredProjects() {
    if (this.activeButton === 'angular') {
      return this.projects.filter(project => project.category === 'angular').slice(-2);
    } else if (this.activeButton === 'javascript') {
      return this.projects.filter(project => project.category === 'javascript').slice(0, 3);
    } else {
      return this.projects;
    }
  }

  setActiveButton(category: string) {
    this.activeButton = category;
  }

  getTryItLink(title: string): string {
    const project = this.projects.find(project => project.title === title);
    return project && project.tryIt ? project.tryIt : '#';
  }

  getGitLink(title: string): string {
    const project = this.projects.find(project => project.title === title);
    return project ? project.git : '#';
  }
}