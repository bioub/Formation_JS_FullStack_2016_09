import $ from 'jquery';
import bootstrap from 'bootstrap';
import {Horloge} from './horloge';

let navbarBrand = document.querySelector('.navbar-brand');

let horloge = new Horloge(navbarBrand);
horloge.update();
