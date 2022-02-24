import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormStyle } from 'src/app/data/interfaces';
import { Contrato, Dictamen, Provider } from 'src/app/data/schema';

@Component({
  selector: 'app-form-cont',
  templateUrl: './form-cont.component.html',
  styleUrls: ['./form-cont.component.css']
})
export class FormContComponent {

  @Input() id: string = ''
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'
  @Input() styles !: FormStyle
  @Input() providers: Provider[] = []
  @Input() isMod: boolean = false

  public _contrato: Contrato
  public hasDict: boolean = false
  public hasDesc: boolean = false;
  public dict: Dictamen


  @Input() set contrato(val: Contrato | undefined) {
    if (val) {
      this._contrato = Object.assign({}, val)

      if (this._contrato.idDictamen != undefined) {
        this.hasDict = true
        this.dict = this._contrato.idDictamen
      } else {
        this.hasDict = false
        this.dict = new Dictamen()
      }

      if (this._contrato.numero != null) {
        this.hasDesc = true
      } else {
        this.hasDesc = false
      }
    }
    else {
      this._contrato = new Contrato()
      this.hasDict = false
      this.hasDesc = false
      this.dict = new Dictamen()
    }
  }


  @Output() submitEvent = new EventEmitter();

  constructor() {
    this._contrato = new Contrato()
    if (this._contrato.idDictamen) {
      this.hasDict = true
      this.dict = this._contrato.idDictamen
    } else {
      this.hasDict = false
      this.dict = new Dictamen()
    }
  }

  isValid(params: NgModel[]) {
    return params.filter(f => !f.valid).length == 0;
  }

  compareObjects(ob1: any, ob2: any) { return (ob1 && ob2) ? ob1.id === ob2.id : false }

  dateChanged() {
    if (this._contrato.duracion && this._contrato.fechaFirma) {
      let ffir = new Date(this._contrato.fechaFirma)
      let inc = ffir.getMonth() + this._contrato.duracion
      ffir.setMonth(inc)

      this._contrato.fechaVenc = ffir
    }
  }

  submitForm() {
    if (this.hasDict) {
      this._contrato.idDictamen = this.dict
    } else {
      this._contrato.idDictamen = undefined
    }

    if (!this.hasDesc) {
      this._contrato.duracion = undefined
      this._contrato.fechaFirma = undefined
      this._contrato.fechaVenc = undefined
      this._contrato.numero = undefined
      this._contrato.observaciones = undefined
    } else {
      if (this._contrato.fechaFirma && this._contrato.fechaVenc) {
        var ffi = new Date(this._contrato.fechaFirma)
        var fve = new Date(this._contrato.fechaVenc)

        ffi.setDate(ffi.getDate() + 1)
        fve.setDate(fve.getDate() + 1)

        this._contrato.fechaFirma = ffi
        this._contrato.fechaVenc = fve
      }
    }

    this.submitEvent.emit(this._contrato)
  }
}
