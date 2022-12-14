import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha',
  templateUrl: './fecha.page.html',
  styleUrls: ['./fecha.page.scss'],
})
export class FechaPage implements OnInit {

  constructor() { }
  fechaNaci: Date = new Date();
  customPickerOptions;
  customDate;
  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => { 
    console.log('Clicked Save');
     console.log( evento ); 
      }
    },{
        text:'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dimiss.');
        return false;
      }
    }
  
      ]
    }
  }
  cambioFecha ( event ) {
    console.log('ionChange', event );
    console.log('Date', new Date( event.detail.value ) );
}
}