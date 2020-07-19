import { AdresService } from './../adres.service';
import { Adres } from './../adres/adres';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertifyService } from '../alertify-service.service';

@Component({
  selector: 'app-adres.list',
  templateUrl: './adres.list.component.html',
  styleUrls: ['./adres.list.component.css'],
})
export class AdresListComponent implements OnInit {
  adres: Observable<Adres[]>;
  constructor(
    private adresService: AdresService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.adres = this.adresService.getAdresList();
  }

  deleteAdres(id: number) {
    this.adresService.deleteAdres(id).subscribe(
      (data) => {
        this.alertifyService.error('Adres silindi.');
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }

  updateAdres(id: number) {
    this.router.navigate(['/adres.update', id]);
  }
}
