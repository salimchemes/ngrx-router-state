import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';

export interface StoreRootState {
  router: fromRouter.RouterReducerState<any>;
}
export const reducers: ActionReducerMap<StoreRootState> = {
  router: routerReducer,
};
export const metaReducers: MetaReducer<
  StoreRootState
>[] = !environment.production ? [] : [];
