import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import { Birthday } from '../models/birthday';

import * as PounchDB from 'pouchdb';

@Injectable()
export class BirthdayService {
    private db

    constructor(private platform: Platform) { }

    initDB(): Promise<any> {
        return this.platform.ready()
            .then(() => {
                this.db = new PounchDB('birthday', { adapter: 'websql' });
            });
    };
    add(birthday: Birthday): Promise<any> {
        return this.db.post(birthday);
    }

    update(birthday: Birthday): Promise<any> {
        return this.db.put(birthday);
    }

    delete(birthday: Birthday): Promise<any> {
        return this.db.remove(birthday);
    }

    getAll():Observable<any>{
        return Observable.fromPromise(
            this.initDB()
                .then(() =>{
                    return this.initDB()
                              .then(() =>{
                                  return this.db.allDocs({include_docs:true});
                              })
                              .then(docs =>{
                                  return docs.rows.map(row =>{
                                      row.doc.Date = new Date(row.doc.Date);
                                      return  row.doc;
                                  })
                              })
                })
        )
    }
    getChanges():Observable<any>{
        return Observable.create(observer =>{
            this.db.changes({live:true,since:'now',include_docs:true})
                .on('change',change =>{
                    change.doc.Date = new Date(change.doc.Date);
                    observer.next(change.doc);
                })
        });
    }
}