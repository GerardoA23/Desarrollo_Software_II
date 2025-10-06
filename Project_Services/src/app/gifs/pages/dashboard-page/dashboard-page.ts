import { Component } from '@angular/core';
import { SlideMenu } from "../../components/slide-menu/slide-menu";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  imports: [SlideMenu, RouterOutlet],
  templateUrl: './dashboard-page.html',
  styles: ``
})
export default class DashboardPage {

}
