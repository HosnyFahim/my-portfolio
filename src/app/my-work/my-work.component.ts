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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/el-pollo-loco.png',
      category: 'angular'
    },
    {
      title: 'Ring of Fire',
      undertitle: 'Angular | TypeScript | HTML | SCSS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/join.png',
      category: 'angular'
    },
    {
      title: 'Portfolio',
      undertitle: 'Angula | TypeScript | HTML | SCSS',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/el-pollo-loco.png',
      category: 'javascript'
    }
  ];

  activeButton = 'all';

  get filteredProjects() {
    if (this.activeButton === 'angular') {
      return this.projects.filter(project => project.category === 'angular').slice(-2);
    } else if (this.activeButton === 'javascript') {
      return this.projects.filter(project => project.category === 'javascript').slice(0, 2);
    } else {
      return this.projects;
    }
  }

  setActiveButton(category: string) {
    this.activeButton = category;
  }
}