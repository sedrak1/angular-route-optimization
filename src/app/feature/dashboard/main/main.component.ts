import { Component, OnInit } from '@angular/core';
declare var ymaps:any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public maps :any;

  constructor() { }

  ngOnInit(): void {}

  onSecondButtonReady(e:any){
    console.log(e)
  }

  onMapReady(event: any){
    const map = event.target;
    this.maps = new ymaps.Map('map', {
        center: [50.450100, 30.523400],
        zoom: 6
      }).bind(this);
    const pointA = [40.1872, 44.5152];
    const pointB = [40.1745, 44.5232];
    console.log(map.multiRouter)
    map.multiRouter?.MultiRoute(
      {
        referencePoints: [pointA, pointB],
        params: {
          routingMode: 'masstransit',
          editor: true,
        },
      },
      {
        wayPointStartIconColor: '#ff5b5b',
        wayPointStartIconFillColor: '#51ffc8',

        routeActiveStrokeColor: '#f61c58',
        routeActiveStrokeWidth: 8,
        routeActiveStrokeStyle: 'dash',

        routeStrokeStyle: 'dot',
        routeStrokeWidth: 3,
        boundsAutoApply: true,
      },
    )
    console.log(map)
    map.multiRoute?.editor?.start();
    this.maps?.current.geoObjects.add(map.multiRoute);
  }


}
