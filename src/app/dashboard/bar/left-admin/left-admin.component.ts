import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from "jquery";
import {LinkListItem} from "./link-list/link-list-item.class";

@Component({
  selector: 'app-bar-left-admin',
  templateUrl: './left-admin.component.html',
  styleUrls: ['./left-admin.component.scss']
})


export class LeftAdminComponent implements OnInit {

  @ViewChild('sidebarAdmin', {read: ElementRef, static: false})
  sideBarElement: ElementRef;

  sideBarLinksElement: LinkListItem[] = [
    new LinkListItem(
      "nav-item mT-30 actived",
      "sidebar-link",
      "/dashboard",
      "Dashboard",
      "c-blue-500 ti-home"
    ),
    new LinkListItem(
      "nav-item",
      "sidebar-link",
      "projects",
      "Projects",
      "c-red-500 ti-briefcase"
    ),
    new LinkListItem(
      "nav-item",
      "sidebar-link",
      "dashboard",
      "Email",
      "c-brown-500 ti-email"
    ),
    new LinkListItem(
      "nav-item",
      "sidebar-link",
      "dashboard",
      "Compose",
      "c-blue-500 ti-share"
    ),
    new LinkListItem(
      "nav-item",
      "sidebar-link",
      "dashboard",
      "Calendar",
      "c-deep-orange-500 ti-calendar"
    ),
    new LinkListItem(
      "nav-item",
      "sidebar-link",
      "dashboard",
      "Chat",
      "c-deep-purple-500 ti-comment-alt"
    ),
  ];

  constructor() {

  }

  clickOnSidebarLink = () => {
    console.log("Sidebar link clicked !!!");


  };
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  initElementsVars(): void {
    this.sideBarLinksElement = this.sideBarElement.nativeElement.querySelectorAll(".sidebar-menu li a");
    console.log(this.sideBarLinksElement);
  }
}
