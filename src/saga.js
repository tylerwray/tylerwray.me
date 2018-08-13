import { all } from 'redux-saga/effects'
import projectsSaga from './pages/Projects/saga'

export default function* rootSaga() {
  yield all([projectsSaga()])
}
