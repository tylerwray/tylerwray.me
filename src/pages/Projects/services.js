import axios from 'axios'

export function getRepos() {
  return axios
    .get('https://api.github.com/users/wraytw/repos')
    .then(res => res.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      language: repo.language,
      updated_at: repo.updated_at
    })))
}
