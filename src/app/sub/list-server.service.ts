import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServerService {
  tabServers = [
    {
      id: 1,
      nom: 'Serveur de production',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Serveur de test',
      statut: 'online',
    },
    {
      id: 3,
      nom: 'Serveur de développement',
      statut: 'offline',
    },
  ];
  constructor() {}

  getServerById(id) {
    return this.tabServers.find((s) => s.id == id);
  }
}
