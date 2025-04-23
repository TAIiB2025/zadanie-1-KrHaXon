import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produkt } from '../models/produkt.class';
import { ProduktComponent } from './produkt/produkt.component';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktComponent, CommonModule, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taiib_zadanie';
  produkty: Produkt[] = [
    new Produkt('Monitor', 1200, new Date(), true),
    new Produkt('Myszka', 320.3, new Date(), false),
    new Produkt('Klawiatura', 845, new Date(), false),
    new Produkt('Karta graficzna', 2845, new Date(), true),
    new Produkt('Procesor', 1277, new Date(), false),
  ];
  wartoscKoszyka: number = 0;

  czyPokazacProdukty: boolean = true;


  przelaczWidocznoscProduktow(): void {
    this.czyPokazacProdukty = !this.czyPokazacProdukty;
  }
  
  aktualizujKoszyk(cena: number): void {
    this.wartoscKoszyka += cena;
  }
  
  wyczyscKoszyk(): void {
    this.wartoscKoszyka = 0;
    this.produkty.forEach(produkt => produkt.liczbaSztuk = 0);
  }
  
}
