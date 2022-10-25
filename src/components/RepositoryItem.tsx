interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;

    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <div>
                <p>•</p>
                <strong>{props.repository.name}</strong>
            </div>
            <p>{props.repository.description}</p>

            <a href={props.repository.html_url}>
                ACESS REPO →
            </a>
        </li>
    )
}