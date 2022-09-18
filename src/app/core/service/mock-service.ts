import { Event } from '../models/event.model';
import { Slide } from './../models/slide.model';

export const ACTUALITY:Array<Slide> = [{
  id: 1,
  title: "PROGRAMME DE LA JOURNEE SCIENTIFIQUE",
  description: "08h00 : Arrivée des étudiants 08h45 : Arrivée des invités 09h00 : Hymne national & Hymne ESIS 09h10 : - Présentation du programme (Modérateur) - Mot de bienvenue DG - Mot du représentant du ministre de l’ESU - Mot du [...]",
  image: "./assets/img/slider/actualite1.png",
  align: "center-align"
},{
  id: 2,
  title: "CONFÉRENCE DE L’UNOPS À ESIS",
  description: "Ce mercredi 6 juillet 2022, Esis a reçu une délégation de l’UNOPS, venue tenir une conférence sur les opportunités de stage et d’emploi y offertes. La délégation était conduite par Madame Ndèye Oulimata NDIONGUE",
  image: "./assets/img/slider/actualite2.jpg",
  align: "left-align"
},{
  id: 3,
  title: "CONSTRUCTION PREMIER NIVEAU BLOC A ",
  description: "Les travaux de construction du premier niveau du Bloc A ont démarré cette année. Contrairement à la maquette initiale qui prévoyait la construction de deux niveaux supplémentaires, en dehors du rez de chaussée, un seu",
  image: "./assets/img/slider/actualite3.jpg",
  align: "right-align"
},{
  id: 4,
  title: "DÉLÉGATION ESIS REÇUE PAR LE BOURGMESTRE DE LA COMMUNE KAMPEMBA",
  description: "Ce mardi 12 avril 2022, une délégation de l’École Supérieure d’Informatique SALAMA a été reçue par le bourgmestre de la commune de KAMPEMBA, Mr Eric TWITE WA LWAMBA. Cette délégation était constituée du Directeur Général",
  image: "./assets/img/slider/actualite4.jpg",
  align: "right-align"
}]

export const EVENTS: Array<Event> = [{
  id: 1,
  title: "Inscription année académique 2022-2023 ",
  description: "Les inscriptions pour l’année académique 2022-2023, aux premier et deuxième cycles, ont déjà débuté. Les inscriptions pour l’année académique 2022-2023, aux premier et deuxième cycles, ont déjà débuté."
},{
  id: 2,
  title: "DIPLOMES ESIS ",
  description: "Le droit de retrait se paie à la banque ou à notre comptabilité sur place à ESIS. Pour plus d'informations, s'adresser au bureau de la réception à la bibliothèque."
},{
  id: 3,
  title: "Journée scientifique",
  description: "Nous avons participes a une journee scientifique reunissant tous les grands de l'Afrique"
}]
