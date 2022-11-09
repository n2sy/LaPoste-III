import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selectedStatut: string): any[] {
    if (selectedStatut == '') return value;
    const newTab = [];
    for (const serv of value) {
      if (serv['statut'].includes(selectedStatut)) newTab.push(serv);
    }
    return newTab;
  }
}
