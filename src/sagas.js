import { actionChannel, call, take, put, race } from 'redux-saga/effects'
import { tick } from './action'

const ONE_SECOND = 1000

const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)

// function* runTimer(getState) {
//   // `sagasMiddleware` irá executar essa função Generator

//   // a saga será acordada quando o evento
//   // `START` for despachado no sistema
//   while (yield take('START')) {
//     while (true) {
//       // estamos usando o efeito `call`, singifica
//       // que o efeito não será executado nessa
//       // linha, tornando mais fácil criar testes
//       yield call(wait, ONE_SECOND);

//       // verificamos se o cronômetro ainda está
//       // em "Running" se sim, despachamos a ação "TICK"
//       if (getState().status === 'Running') {
//         yield put(tick());
//       } else {
//         // caso contrário, quebramos 
//         // o loop `while(true)` e colocamos
//         // a saga em um estado inativo/dormente
//         break;
//       }
//     }
//   }
// }

function* runTimer() {
  const channel = yield actionChannel('START')
  while(yield take(channel)) {
    while(true) {
      const winner = yield race({
        stopped: take('STOP'),
        tick: call(wait, ONE_SECOND)
      })
      if (!winner.stopped) {
        yield put(tick())
      } else {
        break
      }
    }
  }
}

export {
  runTimer
};