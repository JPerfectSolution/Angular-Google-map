import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'google-map';
  lat = 36.964;
  lng = -122.015;
  zoom = 18;

  private map: any;

  ngOnInit(): void {

  }

  changeTilt(map) {
    console.log('setTiltMap: ', map);
    this.map = map;
    this.map.tilt = 45;
    this.map.setTilt(45);
    this.map.setHeading(90);
    // this.map.setZoom(5);
    console.log(this.map);

  }
  rotate90() {
    const heading = this.map.getHeading() || 0;
    this.map.setHeading(heading + 90);
    console.log(heading);
    this.autoRotate();
  }

  autoRotate() {
    // Determine if we're showing aerial imagery.
    if (this.map.getTilt() !== 0) {
      setInterval(() => {
        this.rotate90();
      }, 1000);
    }
  }
}
