import { all } from 'redux-saga/effects'
import reposSaga from './repos'

export default function* rootSaga() {
  yield all([reposSaga()])
}
