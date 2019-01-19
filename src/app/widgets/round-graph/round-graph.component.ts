import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round-graph',
  templateUrl: './round-graph.component.html',
  styleUrls: ['./round-graph.component.scss']
})
export class RoundGraphComponent implements OnInit {

  @Input() current;
  @Input() max;
  @Input() background;
  @Input() color;
  @Input() boxcolor;
  @Input() title;



  public radius       =    250;
  public stroke       =    "20" ;
  public semicircle   =    false;
  public rounded      =    true;
  public clockwise    =    false;
  public responsive   =    true;
  public duration     =    "800";
  public animation    =    'easeInOutQuart';

  constructor() { }

  ngOnInit() {
  }
  getOverlayStyle() {
      let isSemi = this.semicircle;
      let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

      return {
        'top': isSemi ? 'auto' : '50%',
        'bottom': isSemi ? '5%' : 'auto',
        'left': '50%',
        'transform': transform,
        '-moz-transform': transform,
        '-webkit-transform': transform,
        'font-size': this.radius / 7 + 'px'
      };
  }
}
