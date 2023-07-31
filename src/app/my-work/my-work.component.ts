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
      category: 'javascript'
    },
    {
      title: 'El Pollo Loco',
      undertitle: 'OPP | JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso to win his live or die fight again the chickens.',
      image: '/assets/img/pollo-loco.png',
      category: 'javascript'
    },
    {
      title: 'Pokedex',
      undertitle: 'API | Bootstrap | JavaScript | HTML | CSS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/pokedex.png',
      category: 'javascript'
    },
    {
      title: 'Ring of Fire',
      undertitle: 'Angular | TypeScript | Fire base | HTML | SCSS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/ring-of-fire.png',
      category: 'angular'
    },
    {
      title: 'Portfolio',
      undertitle: 'Angula | TypeScript | HTML | SCSS',
      description: 'My personal website.',
      image: '/assets/img/portfolio.png',
      category: 'angular'
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
}