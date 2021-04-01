import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private storageService: StorageService) { }

  async ngOnInit(): Promise<void> {
    console.log((await this.storageService.getUser()));
     
  }

  
}
