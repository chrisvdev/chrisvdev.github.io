import useGithubRepos from "./useGithubRepos";

export default function useFilteredRepos(filters = { byLangs: [], byTech: [] }) {
    const { byLangs, byTech } = filters;
    const technologies = {}
    const langs = {}
    const [repos] = useGithubRepos();
    repos.forEach((element) => {
        Object.keys(element.langs).forEach((lang) => (langs[lang] = true));
        element.tags.filter((element) => element !== "portfolio").forEach((element) => (technologies[element] = true));
    })
    return {
        technologies: Object.keys(technologies),
        langs: Object.keys(langs),
        projects: byLangs.length > 0 || byTech.length > 0 ? repos.filter((repo) => (Object.keys(repo.langs).some((element) => byLangs.includes(element)) || repo.tags.some((element) => byTech.includes(element)))) : repos
    }
}