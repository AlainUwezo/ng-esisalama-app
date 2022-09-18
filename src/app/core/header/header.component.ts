import { Router } from '@angular/router';
import { Link } from './../models/link.model';
import { Address } from './../models/header/address.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  adress_bar!: Address;
  nav_bar_item_link: Link[] = [];
  education_nav: Link[] = NAV_ITEM_EDUCATION;

  @ViewChild('navContentItem', {static:false}) navContentItem!: ElementRef;
  @ViewChild('educationLink', {static:true}) educationLink!: ElementRef;
  @ViewChild('sidenav', {static:false}) sideNav!: ElementRef;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adress_bar = ADRESSE;
    this.educationLink.nativeElement.addEventListener('click', ()=>{
      this.nav_bar_item_link = this.education_nav;
      this.onChangeRowLink(this.educationLink.nativeElement.children.arrow_icon);
    });
  }

  onClickNavItem(): void{
    this.navContentItem.nativeElement.classList.toggle('display-nav-content-item');
  }

  ngAfterViewInit(){
    M.Sidenav.init(this.sideNav.nativeElement, {});
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }

  onChangeRowLink(row_icon:HTMLElement){
    if(row_icon.textContent == 'keyboard_arrow_up'){
      row_icon.textContent = 'keyboard_arrow_down';
    }else{
      row_icon.textContent = 'keyboard_arrow_up';
    }
  }

  onGotoHome(){
    this.router.navigateByUrl("/home", {});
  }
}

const ADRESSE: Address = {
  address: {
    icon: "place",
    value: "Av Femmes Katangaises"
  },
  contacts: [{
    icon: "phone",
    value: "0973061564"
  },{
    icon: "email",
    value: "alainuwezo001@gmail.com"
  }]
}

const NAV_ITEM_EDUCATION: Link[] = [{
    href: "/horaire",
    value: "Horaire des cours",
    icon: 'today'
  },{
    href: "/centre-excellence",
    value: "Centre d'excellence"
  },{
    href: "bibliotheque",
    value: "Bibliothèques"
  },{
    href: "https://www.esisalama.org/publication/",
    value: "Publication des résultats",
    externe: true
  },{
    href: "https://script.google.com/a/macros/esisalama.org/s/AKfycbxtpNT6IbxrkHwV8fMTOQZLomGfk8fKRyob9QnChn5ex2wQ_bOpbVMEgb2dllogf8qMIg/exec",
    value: "Récours",
    externe: true
  },{
    href: "https://www.esisalama.net/elearning/login/index.php",
    value: "E-Learning",
    externe: true
  },{
    href: "https://colibris.credia.io/authentification.esis",
    value: "Suivi TFC",
    externe: true
  },{
    href: "https://jsesis2022.esisalama.com/js3sis2022/",
    value: "Journée scientifique",
    externe: true
  }
]
