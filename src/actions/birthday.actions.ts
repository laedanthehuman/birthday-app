import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Birthday } from '../models/birthday';

@Injectable()
export class BirthdayActions {

    static ADD_BIRTHDAY = 'ADD_BIRTHDAY';
    static UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
    static DELETE_BIRTHDAY = 'DELETE_BIRTHDAY';
    static LOAD_BIRTHDAYS_SUCCESS = 'LOAD_BIRTHDAYS_SUCCESS';
    static ADD_UPDATE_BIRTHDAY_SUCCESS = 'ADD_UPDATE_BIRTHDAY_SUCCESS';
    static DELETE_BIRTHDAY_SUCCESS = 'DELETE_BIRTHDAY_SUCCESS';

    addBirthday(birthday: Birthday): Action {
        return {
            type: BirthdayActions.ADD_BIRTHDAY,
            payload: birthday
        }
    }

    updateBirthday(birthday: Birthday): Action {
        return {
            type: BirthdayActions.UPDATE_BIRTHDAY,
            payload: birthday
        }
    }

    deleteBirthday(birthday: Birthday): Action {
        return {
            type: BirthdayActions.DELETE_BIRTHDAY,
            payload: birthday
        }
    }

    loadBirthdaysSuccess(birthdays: Birthday[]): Action {
        return {
            type: BirthdayActions.LOAD_BIRTHDAYS_SUCCESS,
            payload: birthdays
        }
    }

    addUpdateBirthdaySuccess(birthday: Birthday): Action {
        return {
            type: BirthdayActions.ADD_UPDATE_BIRTHDAY_SUCCESS,
            payload: birthday
        }
    }
    deleteBirthdaySuccess(id: string): Action {
        return {
            type: BirthdayActions.DELETE_BIRTHDAY_SUCCESS,
            payload: id
        }
    }
}