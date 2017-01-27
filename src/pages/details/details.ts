import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { AppState } from '../../services/app-state';
import { BirthdayActions } from '../../actions/birthday.actions';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  public birthday: any = {};
  public isNew = true;
  public action = 'Add';
  public isoDate = '';

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams,
    private store: Store<AppState>,
    private BirthdayActions: BirthdayActions) { }

  ionViewWillEnter() {
    let editBirthDay = this.navParams.get('birthday');
    if (editBirthDay) {
      this.birthday = editBirthDay;
      this.isNew = false;
      this.action = 'Edit';
      this.isoDate = this.birthday.Date.toISOString().slice(0, 10);
    }
  }

  save() {
    this.birthday.Date = new Date(this.isoDate);
    if (this.isNew) {
      this.store.dispatch(this.BirthdayActions.addBirthday(this.birthday));
    } else {
      this.store.dispatch(this.BirthdayActions.updateBirthday(this.birthday));
    }
    this.dismiss();
  }

  delete() {
    this.store.dispatch(this.BirthdayActions.deleteBirthday(this.birthday));
    this.dismiss();
  }

  dismiss() {
    this.viewCtrl.dismiss(this.birthday);
  }

}
