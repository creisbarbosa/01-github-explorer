import { useState, useEffect } from 'react'
import { RepositoryItem } from "./RepositoryItem";


import '../styles/repositories.scss'

interface Repository {
    name: string;
    description: string;
    html_url: string;

}

const url = 'https://api.github.com/orgs/rocketseat/repos';

export function RepositoryList() {

    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch(url)
        .then(responde => responde.json())
        .then(data => setRepositories(data))
        .catch(error => console.error(error))
    }, [])

    return (
        <section className="repository-list">
            <div className='homeHeader'>
                <img src="https://www.rocketseat.com.br/assets/logos/rocketseat.svg" alt="rocketseat icon" />
                <h1>REPOS</h1>
            </div>
            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
            </ul>
        </section>
    )
}