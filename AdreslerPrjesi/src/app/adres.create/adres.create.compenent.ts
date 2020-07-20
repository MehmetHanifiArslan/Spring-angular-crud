import  { AlertifyService } from './../alertify-service.service';
import { Router } from '@angular/router';
import { AdresService } from './../adres.service';
import { Adres } from './../adres/adres';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app.adres-create',
  templateUrl: './adres.create.component.html',
  styleUrls: ['./adres.create.component.css'],
})
export class AdresCreateComponent implements OnInit {
  adres: Adres = new Adres();
  submitted = false;

  constructor(
    private adresService: AdresService,
    private alertifyService:AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  newAdres(): void {
    this.submitted = false;
    this.adres = new Adres();
  }

  save() {
    this.adresService.createAdres(this.adres).subscribe(
      (data) => {
        this.alertifyService.success(this.adres.mahalle + ' başarıyla eklendi.');
      },
      (error) => console.log(error)
    );
   
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}