import { Component } from '@angular/core';

@Component({
  selector: 'app-centre-excellence',
  templateUrl: './centre-excellence.component.html',
  styleUrls: ['./centre-excellence.component.css']
})
export class CentreExcellenceComponent {

  ngAfterViewInit(){
    // Collapse items
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  }

}
