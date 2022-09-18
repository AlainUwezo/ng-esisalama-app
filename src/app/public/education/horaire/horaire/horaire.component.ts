import { Component } from '@angular/core';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.css']
})
export class HoraireComponent {
  ngAfterViewInit(){
    var tabs = document.querySelector('.tab-demo');
    M.Tabs.init(tabs, {});

    // Collapse items
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  }

}
