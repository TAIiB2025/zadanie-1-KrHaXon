import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CurrencyFormatPipe } from '../currency-format.pipe';

@Component({
  selector: 'app-koszyk',
  imports: [CommonModule, CurrencyFormatPipe],
  templateUrl: './koszyk.component.html',
  styleUrl: './koszyk.component.css'
})
export class KoszykComponent {
  @Input() wartoscKoszyka: number = 0;
}
