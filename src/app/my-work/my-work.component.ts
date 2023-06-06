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
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/join.png',
      category: 'javascript'
    },
    {
      title: 'El Pollo Loco',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/pollo-loco.png',
      category: 'angular'
    },
    {
      title: 'Ring of Fire',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/join.png',
      category: 'angular'
    },
    {
      title: 'Portfolio',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      image: '/assets/img/pollo-loco.png',
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