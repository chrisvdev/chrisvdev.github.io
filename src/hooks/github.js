import { useState } from "react";
import repo from "../repos"
import axios from "axios";

function useGithubRepos(userName = "chrisvill2312") {
    const [repos, setRepos] = useState([])
    const processing = repo.map((e) => {
        const clon = structuredClone(e);
        return axios.get(clon.languages_url)
            .then((response) => ({
                langs: response.data, name: clon.name,
                description: clon.description,
                updated: clon.updated_at,
                tags: clon.topics,
            }))
    })
    try {
        Promise.all(processing)
            .then((repos) => (setRepos(repos)))
    } catch (error) {
        setRepos[{error:"error al cargar"}]
    }
}