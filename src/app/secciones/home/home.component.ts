import { Component, OnInit, ViewChild } from '@angular/core';
import { HistoriaClinica } from 'src/app/clases/historia-clinica';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OrdenesService } from 'src/app/servicios/ordenes.service';
import Swal from 'sweetalert2';
declare var jQuery: any;

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

  displayedColumns: string[] = ['NumeroOrden', 'Nombre', 'Apellido', 'DocumentoDeIdentidad', 'Edad', 'Genero', 'ObraSocial', 'FactorSanguineo'];

  constructor(private servicioOrdenes: OrdenesService, private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.resetearFormulario();

    this.servicioOrdenes.GetOrdenes().subscribe((valores) => {
        this.listadoHistorias = new MatTableDataSource(valores);
        this.listadoHistorias.sort = this.sort;
        this.listadoHistorias.paginator = this.paginator;
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {

      this.submitted = true;
      this.nuevaHistoriaClinica = this.registerForm.value;

      if (this.registerForm.valid) {
        this.servicioOrdenes.SetOrden(this.nuevaHistoriaClinica).subscribe( value => {
          this.servicioOrdenes.GetOrdenes().subscribe((valores) => {
            this.listadoHistorias = new MatTableDataSource(valores);
            this.listadoHistorias.sort = this.sort;
            this.listadoHistorias.paginator = this.paginator;
            });
          Swal.fire({
              position: 'top-end',
              type: 'success',
              title: 'Se ha dado satisfactoriamente de alta.',
              showConfirmButton: false,
              timer: 1500
            });
          this.registerForm.reset();
        }, error => Swal.fire({
          position: 'top-end',
          type: 'error',
          title: error.Message,
          showConfirmButton: false,
          timer: 1500
        }));
        jQuery('#nuevoHistorial').modal('hide');
      }
    }


    resetearFormulario() {
      this.registerForm = this.formBuilder.group({
        NumeroOrden: ['', Validators.required],
        Nombre: ['', Validators.required],
        Apellido: ['', [Validators.required]],
        DocumentoDeIdentidad: ['', [
                                      Validators.required,
                                      Validators.maxLength(8),
                                      Validators.minLength(8),
                                      Validators.pattern('^[0-9]*$')
                                    ]
                              ],
        Edad: ['', Validators.required],
        Genero: ['', Validators.required],
        ObraSocial: ['', Validators.required],
        GrupoSanguineo: ['', Validators.required],
        FactorSanguineo: ['', Validators.required],
        Observaciones: [''],
        ImagenPerfil: ['']
      });
    }
}
