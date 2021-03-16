import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  
  onClick(){
    this.presentActionSheet();
  }

  //action-Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albumnes',
      backdropDismiss: false,  //<--con esto le digo que es necesario
      buttons: [{               //que toque alguna de las opciones
        text: 'Delete',         //del action-sheet
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}

