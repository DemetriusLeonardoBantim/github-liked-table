import {useEffect, useState} from 'react'
import {api} from '../../services'
import {Repositories} from './style'
import {BsHeartFill} from 'react-icons/bs'

export interface RepositoryProps {
  id:number;
  name:string;
  description:string;
  html_url:string;
  owner: {
    avatar_url:string;
  }
  liked:boolean
}

export function Reposiories(){
  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  function handleLikedRepository(id:number){
    const likedRepository = repositories.map(repository => 
      repository.id === id ? { ...repository, liked: !repository.liked, } : repository
    )
    setRepositories(likedRepository)

    
  }

  useEffect(() => {
      const saveRepository = repositories.filter(repository => repository.liked)
      if (repositories.length) {
        localStorage.setItem(
          '@GithubRepositories:Liked',
          JSON.stringify(saveRepository)
        );
      }
  }, [repositories])

  useEffect(() => {
    async function listRepositories(){
      const response = await api.get<RepositoryProps[]>('')
      setRepositories(response.data.map(infoRepository => ({
        ...infoRepository,
        liked: JSON.parse(localStorage.getItem('@GithubRepositories:Liked') || '[]').
        some((liked: RepositoryProps) => liked.id == infoRepository.id)
      })))

    }
    listRepositories()
  }, [])

  return(
    <>
      <Repositories>
        {repositories && repositories.map((repository : RepositoryProps) => (
          <section key={repository.id}>
            <img src={repository.owner.avatar_url} alt="avatar-repository" />

            <div>
              <strong> {repository.name}</strong>
              <p>{repository.description}</p>
              <h2>{repository.html_url}</h2>
            </div>
            <BsHeartFill 
              size={24}  
              color={ repository.liked ? 'red' : ''}  
              onClick={() => handleLikedRepository(repository.id)}
            />
          </section>
        ))}
      </Repositories>
    </>
  )
}