import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
  }

  closeMenuItems() {
    var dropdowns = this.el.nativeElement.querySelectorAll(".menu-dropdown,.menuList,.user-dropdown");
    for (var i = 0; i < dropdowns.length; i++) {

      dropdowns[i].classList.remove('open');
      var arrowIcons = dropdowns[i].querySelectorAll('.rotate,.active')
      arrowIcons.forEach(function (icon) {
        icon.classList.remove('rotate')
        icon.classList.remove('active')
      });
      dropdowns[i].classList.remove('active');
    }
  }

}
