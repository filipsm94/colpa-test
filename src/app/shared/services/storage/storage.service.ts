import { Injectable } from '@angular/core';
import { MemoizedSelector, select, Store } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { defineUuid, deleteUuid } from 'src/app/store/actions/auth.actions';
import { defineUser, deleteUser } from 'src/app/store/actions/user.actions';
import { ColpatriaState } from 'src/app/store/reducers';
import { getUuidSelector } from 'src/app/store/selectors/auth/auth.selectors';
import { IUserModel } from '../../models/user.model';
import {map, take} from 'rxjs/operators';
import { getUserSelector } from 'src/app/store/selectors/user/user.selectors';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private store: Store<ColpatriaState>) { }

  private dispatchAction(action: TypedAction<any>){
    this.store.dispatch(action)
  }

  setUuid(Uuid: string): void {
    this.dispatchAction(defineUuid({payload: Uuid}))
  }

  getUuid(): Promise<string> {
    return this.store.pipe(
      select(getUuidSelector),
      map((Uuid) => Uuid),
      take(1)
    ).toPromise();    
  }

  setUser(user: IUserModel){
    this.dispatchAction(defineUser({payload: user}))
  }

  getUser(): Promise<IUserModel>{
    return this.store.pipe(
      select(getUserSelector),
      map((user) => user),
      take(1)
    ).toPromise();
  }

  clearSessionInfo(){
    this.dispatchAction(deleteUuid());
    this.dispatchAction(deleteUser())
  }
}
