import { Component, OnInit } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, SelectItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CommonModule,
    DropdownModule,
    FormsModule,
    ToolbarModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  avatarItems!: any[];
  selectedAvatarItem!: string | undefined;

  taskHarborLogo!: string;
  profileAvatar!: string;

  constructor(private router: Router) {
    this.avatarItems = [];
    this.taskHarborLogo = '../../../assets/images/task-harbor-original-logo.png';
    this.profileAvatar = '../../../assets/images/temp-avatar.avif';
  }

  ngOnInit() {
    this.avatarItems.push({
      label: 'Account',
    });
    this.avatarItems.push({
      label: 'Log out',
    });
  }

  onLogoClick(e: any) {
    this.router.navigate(['/home']);
  }


  onChangeClick(e: any) {
    if (e.value.label === 'Log out') {
      this.router.navigate(['/login']);
    } else if (e.value.label === 'Account') {
      this.router.navigate(['/user-account']);
    }
  }
}
