export class Produkt {
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: boolean;
    liczbaSztuk: number = 0;

    constructor(nazwa: string, cena: number, dataUtworzenia: Date, czyPromocja: boolean)
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
    }


}