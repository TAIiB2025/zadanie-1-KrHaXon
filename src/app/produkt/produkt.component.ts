import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from '../../models/produkt.class';
import { CommonModule } from '@angular/common';
import { CurrencyFormatPipe } from '../currency-format.pipe';


@Component({
  selector: 'app-produkt',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './produkt.component.html',
  styleUrl: './produkt.component.css'
})
export class ProduktComponent {
  @Input() produkt!: Produkt;
  @Output() dodanoDoKoszyka = new EventEmitter<number>();
  dodajDoKoszyka() {
    console.log(`${this.produkt.nazwa} został dodany do koszyka.`);
    this.dodanoDoKoszyka.emit(this.produkt.cena);
    this.produkt.liczbaSztuk++;
  }
  czyRozwiniety: boolean = true;
  przelaczWidocznosc(): void {
    this.czyRozwiniety = !this.czyRozwiniety;
  }
}
