import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-side-navigation',
  standalone: true,
  imports: [SidebarModule, ButtonModule, AvatarModule, TreeModule],
  templateUrl: './side-navigation.component.html',
  styleUrl: './side-navigation.component.css',
})
export class SideNavigationComponent implements OnInit {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;
  isSidebarVisible: boolean = false;
  navItems!: TreeNode[];
  navItemsSecondMenu!: TreeNode[];

  taskHarborLogo!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService,
  ) {
    this.taskHarborLogo = '../../../assets/images/task-harbor-original-logo.png';
    this.navItems = [];
    this.navItemsSecondMenu = [];
  }

  ngOnInit() {
    this.navItems = [
      {
        key: '0',
        label: 'Menu',
        icon: 'pi pi-bars',
        children: [
          {
            key: '0-0',
            label: 'Home',
            icon: 'pi pi-home',
          },
          {
            key: '0-1',
            label: 'Calendar',
            icon: 'pi pi-calendar',
          },
          {
            key: '0-2',
            label: 'Tasks',
            icon: 'pi pi-list',
          },
        ],
      },
    ];

    this.navItemsSecondMenu = [
      {
        key: '0',
        label: 'Parameters',
        children: [{}, {}],
      },
    ];
  }

  closeSideBar(e: any) {
    this.sidebarRef.close(e);
  }

  onMenuItemCLick(e: any) {
    if (e.target.firstChild.data === 'Home') {
      this.router.navigate(['home']);
      this.closeSideBar(e);
    } else if (e.target.firstChild.data === 'Tasks') {
      this.router.navigate(['tasknotes-list']);
      this.closeSideBar(e);
    } else if (e.target.firstChild.data === 'Calendar') {
      this.router.navigate(['calendar']);
    }
  }
}
