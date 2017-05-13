import { Component, OnInit } from '@angular/core';
import { BehanceService } from './../services/behance.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  projects: any;

  constructor(private behanceService: BehanceService) { }

  ngOnInit() {
    this.behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
    })
  }
}
