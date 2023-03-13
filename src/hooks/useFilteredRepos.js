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
        projects: (byLangs.length > 0 || byTech.length > 0 ?                                                    // Si hay algun tipo de filtro activo
            repos.filter((repo) => (Object.keys(repo.langs).some((element) => byLangs.includes(element)) ||     // Filtra los repos segun los filtros
                repo.tags.some((element) => byTech.includes(element))))
            : repos)                                                                                            // Sino devuelve todo
            .sort((pr1, pr2) => Date.parse(pr2.updated) - Date.parse(pr1.updated))                              // siempre ordenado por repo mas nuevo.
    }
}