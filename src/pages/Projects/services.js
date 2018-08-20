import axios from 'axios'

export function getRepos() {
  return axios
    .get('https://api.github.com/users/tylerwray/repos')
    .then(res => res.data)
}
