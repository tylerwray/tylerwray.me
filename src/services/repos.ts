import axios from 'axios'
import { GithubRepo } from '../types'

export function getRepos(): Promise<GithubRepo[]> {
  return axios
    .get('https://api.github.com/users/tylerwray/repos')
    .then(res => res.data)
}
