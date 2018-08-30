import { takeLatest, call, put } from 'redux-saga/effects'

import { REPOS_REQUEST } from '../actionTypes'
import { reposError, reposSuccess } from '../actions/repos'
import { getRepos } from '../services/repos'

export default function*() {
  yield takeLatest(REPOS_REQUEST, handleReposRequest)
}

function* handleReposRequest() {
  try {
    const repos = yield call(getRepos)
    yield put(reposSuccess(repos))
  } catch (err) {
    yield put(reposError(err.message))
  }
}
