import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveHome!: boolean;
  isActiveAbout!: boolean;
  isActiveSkills!: boolean;
  isActiveMyWork!: boolean;
  isActiveContact!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.isActiveHome = fragment === 'home';
      this.isActiveAbout = fragment === 'about';
      this.isActiveSkills = fragment === 'skills';
      this.isActiveMyWork = fragment === 'my-work';
      this.isActiveContact = fragment === 'contact';
    });
  }
}
