import { Component } from '@angular/core';
import { DocumentScanner, DocumentScannerOptions } from '@ionic-native/document-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private documentScanner: DocumentScanner) {}

  scanDocument(){
    let opts: DocumentScannerOptions = {};
    this.documentScanner.scanDoc(opts).then((res: string) => alert("Document scanned"))
    .catch((error: any) => alert("Error happed"));
  }

}
