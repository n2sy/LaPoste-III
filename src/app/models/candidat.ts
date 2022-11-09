export class Candidat {
  //   nom: string;
  //   prenom: string;

  constructor(
    public id: number,
    public prenom: string,
    public nom: string,
    public age: number,
    public profession: string,
    public avatar?: string
  ) {
    // this.nom = nom;
    // this.prenom = prenom;
  }
}
