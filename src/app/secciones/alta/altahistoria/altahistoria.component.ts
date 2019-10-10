import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OrdenesService } from 'src/app/servicios/ordenes.service';
import { HistoriaClinica } from 'src/app/clases/historia-clinica';

@Component({
  selector: 'app-altahistoria',
  templateUrl: './altahistoria.component.html',
  styleUrls: ['./altahistoria.component.css']
})
export class AltahistoriaComponent implements OnInit {

  constructor(private servicioOrdenes: OrdenesService, private formBuilder: FormBuilder) { }

  registerForm: FormGroup;
  submitted = false;
  nuevaHistoriaClinica: HistoriaClinica = new HistoriaClinica();

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      NumeroOrden: ['', Validators.required],
      Nombre: ['', Validators.required],
      Apellido: ['', [Validators.required]],
      DocumentoDeIdentidad: ['', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
      Edad: ['', Validators.required],
      Genero: ['', Validators.required],
      ObraSocial: ['', Validators.required],
      GrupoSanguineo: ['', Validators.required],
      FactorSanguineo: ['', Validators.required],
});
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;
      this.nuevaHistoriaClinica = this.registerForm.value;
      this.servicioOrdenes.SetOrden(this.nuevaHistoriaClinica);
    }

}
