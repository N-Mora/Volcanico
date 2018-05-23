import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  etudiant = { 'nom': 'Morris', 'age': 23, 'saved': false };
  etudiants = [{ 'nom': 'Morris' }, { 'nom': 'Loris' }, { 'nom': 'Floris' }, { 'nom': 'Jaunisse' }];
  constructor() { }

  ngOnInit() {
  }

  getEtudiant(): void {
    this.etudiant.nom = 'default';
  }

  saveEtudiant() {
    this.etudiant.saved = true;
  }
}
