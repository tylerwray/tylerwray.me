import { takeLatest, call, put } from 'redux-saga/effects'

import { REPOS_REQUEST } from './actionTypes'
import { getRepos } from './services'
import { reposRequestSuccess } from './actions'

export default function*() {
  yield takeLatest(REPOS_REQUEST, handleReposRequest)
}

function* handleReposRequest() {
  const repos = yield call(getRepos)
  yield put(reposRequestSuccess(repos))
}
