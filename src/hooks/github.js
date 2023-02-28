import repo from "../repos"

function useGithubRepos () {
    const filtered = repo.map((e)=>{
        const clon = structuredClone(e);
        return {
            name:clon.name,
            description:clon.description,
            updated:clon.updated_at,
            tags:clon.topics,
        }
    })
    
}