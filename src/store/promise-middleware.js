import { LOAD_START, LOAD_END, ERROR } from '../components/app/error-reducers';

const isPromise = val => val && typeof val.then === 'function';

export default ({ dispach }) => next => action => {
  const { type, payload } = action;
  if(!isPromise(payload)) return next(action);

  dispach({ type: LOAD_START }); 

  return payload
    .then(
      result => {
        dispach({ type: LOAD_END });

        return dispach({
          type,
          payload: result
        });
      },
      err => {
        dispach({ type: LOAD_END });
        dispach({ type: ERROR, payload: err });
        throw err;
      }
    );
};