import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveHome: boolean = false;
  isActiveAbout: boolean = false;
  isActiveSkills: boolean = false;
  isActiveMyWork: boolean = false;
  isActiveContact: boolean = false;
  isMenuOpen: boolean = false;
  isMobileResolution: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.updateActiveSections(fragment);
    });

    this.updateActiveSections(this.route.snapshot.fragment);
    this.updateMobileResolution();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateActiveSections(this.route.snapshot.fragment);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateMobileResolution();
  }

  private updateActiveSections(fragment: string | null): void {
    const homeElement = document.getElementById('home');
    const aboutElement = document.getElementById('about');
    const skillsElement = document.getElementById('skills');
    const myWorkElement = document.getElementById('my-work');
    const portfolioElement = document.getElementById('portfolio');
    const contactElement = document.getElementById('contact');

    const isHomeActive = !!homeElement && homeElement.getBoundingClientRect().top <= 200 && homeElement.getBoundingClientRect().bottom > 100;
    const isAboutActive = !!aboutElement && aboutElement.getBoundingClientRect().top <= 200 && aboutElement.getBoundingClientRect().bottom > 100;
    const isSkillsActive = !!skillsElement && skillsElement.getBoundingClientRect().top <= 200 && skillsElement.getBoundingClientRect().bottom > 100;
    const isMyWorkActive = !!myWorkElement && !!portfolioElement && myWorkElement.getBoundingClientRect().top <= 200 && myWorkElement.getBoundingClientRect().bottom > 200;
    const isContactActive = !!contactElement && contactElement.getBoundingClientRect().top <= 200 && contactElement.getBoundingClientRect().bottom > 100;

    this.isActiveHome = isHomeActive;
    this.isActiveAbout = isAboutActive;
    this.isActiveSkills = isSkillsActive;
    this.isActiveMyWork = isMyWorkActive;
    this.isActiveContact = isContactActive;
  }

  private updateMobileResolution(): void {
    this.isMobileResolution = window.innerWidth <= 900;
    if (!this.isMobileResolution) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu(): void {
    if (!this.isMobileResolution) {
      return;
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}