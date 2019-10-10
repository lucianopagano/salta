import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoriaClinica } from 'src/app/clases/historia-clinica';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OrdenesService } from 'src/app/servicios/ordenes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  listadoHistorias: MatTableDataSource<HistoriaClinica>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  nuevaHistoriaClinica: HistoriaClinica = new HistoriaClinica();

  displayedColumns: string[] = [
                                'NumeroOrden',
                                'Nombre',
                                'Apellido',
                                'DocumentoDeIdentidad',
                                'Edad',
                                'Genero',
                                'ObraSocial',
                                'FactorSanguineo'
                              ];

  constructor(private servicioOrdenes: OrdenesService) { }

  submitted = false;

  ngOnInit() {
    this.servicioOrdenes.GetOrdenes().subscribe((valores) => {
    this.listadoHistorias = new MatTableDataSource(valores);
    this.listadoHistorias.sort = this.sort;
    this.listadoHistorias.paginator = this.paginator;
    });
  }
}
