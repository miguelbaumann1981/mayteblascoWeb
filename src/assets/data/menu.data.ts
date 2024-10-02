import { ItemMenu } from "src/app/shared/interfaces/menu.interface";

export const menuNav: ItemMenu[] = [
   {
      icon: 'w-icon-female',
      name: 'Sobre mí',
      link: '/main/aboutMe'
   },
   {
      icon: 'w-icon-books',
      name: 'Mis libros',
      link: '/books/bibliography'
   },
   {
      icon: 'w-icon-awards',
      name: 'Premios y reconocimientos',
      link: '/main/awards'
   },
   {
      icon: 'w-icon-microphone',
      name: 'Entrevistas',
      link: '/main/interviews'
   },
   {
      icon: 'w-icon-envelop',
      name: 'Contacto',
      link: '/main/contact'
   },
   {
      icon: 'icon-users',
      name: 'Colaboraciones',
      link: '/main/colaborations'
   }
];