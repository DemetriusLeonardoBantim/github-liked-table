import { useState } from 'react'
import {RepositoryProps} from '../Repositories'
import {Container} from './style'

export function RepositoriesLiked(){
  const [repositoriesLiked] = useState<RepositoryProps[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubRepositories:Liked'
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });
  
  return (
    <>
      <Container>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
        {repositoriesLiked && repositoriesLiked.map((repository : RepositoryProps) => (
        <tr key={repository.id}>
          <td>{repository.name}</td>
          <td>{repository.description}</td>
          <td>{repository.html_url}</td>
        </tr>
      ))}
        </tbody>
      </table>
    </Container>
    </>

  )
}


