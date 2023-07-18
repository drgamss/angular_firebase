import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  ngOnInit(): void {
    setInterval(() => {
      this.progress = this.progress + 5;
    }, 1000)
  }

  progress = 0; 

}
