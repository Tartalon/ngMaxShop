import { Component } from '@angular/core';
// import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  hidden = true;

  onDropdown() {
    this.hidden = !this.hidden;
  }
}
