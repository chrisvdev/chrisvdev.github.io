import { useState } from "react";
import axios from "axios";

function useGithubRepos(userName = "chrisvill2312") {
    const [projects, setProjects] = useState([])
    const processing = repo.map((e) => {
        const clon = structuredClone(e);
        return axios.get(clon.languages_url)
            .then((response) => ({
                langs: response.data, name: clon.name,
                description: clon.description,
                updated: clon.updated_at,
                tags: clon.topics,
                deploy: clon.homepage
            }))
    })
    try {
        Promise.all(processing)
            .then((repos) => (setProjects(filterProjects(repos))))
    } catch (error) {
        setProjects[{ error: "error al cargar" }]
    }
    return projects;
}