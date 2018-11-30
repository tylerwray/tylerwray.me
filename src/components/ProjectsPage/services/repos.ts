import axios from 'axios'
import { IRepo } from '../types'

export function getRepos(): Promise<Array<IRepo>> {
  return axios
    .get('https://api.github.com/users/tylerwray/repos')
    .then(res => res.data)
}
