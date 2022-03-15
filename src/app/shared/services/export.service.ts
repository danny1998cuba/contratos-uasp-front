import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class ExportService {

  private vert_margin = 10;
  private hor_margin = 20;


  constructor() { }

  downloadPdf(data: any[], texts: string[], filename: string = 'Contratos.pdf') {
    const doc = this.preparePDF(data, texts)

    if (!filename.endsWith('.pdf')) {
      filename += '.pdf'
    }

    doc.save(filename);
  }

  private preparePDF(data: any[], texts: string[]): any {
    const doc = new jsPDF({ orientation: 'l', format: 'letter', compress: true })

    var img = new Image()
    img.src = 'assets/images/logo-white.png'
    doc.addImage(img, 'png', this.hor_margin, this.vert_margin, 47, 15)

    doc.setFontSize(16)
    doc.text(texts[0], (this.hor_margin + 47 + this.hor_margin), (this.vert_margin * 1.3), { align: 'left', baseline: 'middle' })
    doc.setFontSize(9)
    doc.text(texts[1], (this.hor_margin + 47 + this.hor_margin), (this.vert_margin * 1.3 + 8), { align: 'left', baseline: 'middle' })

    //@ts-ignore
    doc.autoTable(this.prepareTable(data));

    return doc
  }

  private prepareTable(data: any[]): any {
    return {
      body: data,
      columns: [
        { header: 'Id', dataKey: 'id' },
        { header: 'Nombre del proveedor', dataKey: 'prov' },
        { header: 'Fecha de emisión', dataKey: 'fechaFirma' },
        { header: 'Fecha de vencimiento', dataKey: 'fechaVenc' },
        { header: 'Número', dataKey: 'number' },
      ],
      startY: this.vert_margin + 20,
      margin: { top: 0, right: this.hor_margin, bottom: 0, left: this.hor_margin }
    }
  }

}
