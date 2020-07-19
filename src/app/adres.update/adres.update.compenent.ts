import { AdresService } from './../adres.service';
import { Adres } from './../adres/adres';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from '../alertify-service.service';

@Component({
  selector: 'app-adres.update',
  templateUrl: './adres.update.component.html',
  styleUrls: ['./adres.update.component.css'],
})
export class AdresUpdateComponent implements OnInit {
  id: number;
  adres: Adres;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertifyService: AlertifyService,
    private adresService: AdresService
  ) {}

  ngOnInit(): void {
    this.adres = new Adres();
    this.id = this.route.snapshot.params['id'];
    this.adresService.getAdres(this.id).subscribe(
      (data) => {
        console.log('başarılı');
        this.adres = data;
      },
      (error) => console.log(error)
    );
  }

  updateAdres() {
    this.adresService.updateAdres(this.id, this.adres).subscribe(
      (data) => {
        this.alertifyService.warning(
          this.adres.mahalle + ' başarıyla güncellendi.'
        );
      },
      (error) => console.log(error)
    );

  }

  onSubmit() {
    this.updateAdres();
  }
}

