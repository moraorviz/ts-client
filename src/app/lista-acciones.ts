import { Accion } from './accion';

export const ACCIONES: Accion[] = [
  { id: 1, name: 'GET <url>' },
  { id: 2, name: 'GET <url>/{entidad}' },
  { id: 3, name: 'POST <url>/{entidad}' },
  { id: 4, name: 'PUT <url>/{entidad}/{id}' },
  { id: 5, name: 'GET <url>/{entidad}/{id}' },
  { id: 6, name: 'DELETE <url>/{entidad}/{id}' }
];


