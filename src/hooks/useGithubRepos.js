import { useState, useEffect } from "react";
import axios from "axios";

const filterProjects = (repos) =>
    repos.filter((repo) => repo.tags.includes("portfolio"));

export default function useGithubRepos (userName = "chrisvdev") {
    const [projects, setProjects] = useState([]);
    const [externalProjects, setExternalProjects] = useState([]);
    useEffect(() => {
        if (projects.length === 0) {
            axios
                .get(`https://api.github.com/users/${userName}/repos`)
                .then((response) => {
                    const processing = response.data.map((e) => {
                        const clon = structuredClone(e);
                        return axios.get(clon.languages_url).then((response) => ({
                            userName: userName,
                            langs: response.data,
                            name: clon.name,
                            description: clon.description,
                            updated: clon.created_at,
                            tags: clon.topics,
                            deploy: clon.homepage,
                            github: clon.html_url,
                            preview: `https://res.cloudinary.com/dgg07ocbn/image/upload/fl_awebp/w_384,h_216,c_scale/v1/Landing/Projects/${clon.name + (clon.name.includes(".") ? ".jpg" : "")
                                }`,
                        }));
                    });
                    try {
                        Promise.all(processing).then((repos) =>
                            setProjects(filterProjects(repos))
                        );
                    } catch (error) {
                        setProjects([]);
                    }
                })
                .catch(() => {
                    setProjects([]);
                });
        }
    }, [projects]);
    useEffect(() => {
        if (externalProjects.length === 0) {
            axios
                .get(`https://raw.githubusercontent.com/chrisvill2312/chrisvill2312.github.io/Content/content.json`)
                .then((response) => {
                    setExternalProjects(response.data)
                })
                .catch(() => (setExternalProjects([])));
        }
    }, [externalProjects]);

    const updateProjects = () => setProjects([]);

    return [[...projects, ...externalProjects], updateProjects];
}

// https://raw.githubusercontent.com/chrisvill2312/chrisvill2312.github.io/Content/content.json
