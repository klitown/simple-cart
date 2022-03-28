import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/fake-api.service';
import { Product } from './types/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Simple Kart Challenge - Angular Way';
  productos: Product[] = [];
  carrito: Product[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(): void {
    this.apiService.getProductos().subscribe(
      (data: Product[]) => this.productos = data
    );
    console.log(this.productos);
  }

  addProduct(producto: Product): void {
    if (!this.carrito.find(item => item.title === producto.title)) {
      this.carrito.push(producto);
    }
    console.log('Carrito: ', this.carrito);
  }

}
