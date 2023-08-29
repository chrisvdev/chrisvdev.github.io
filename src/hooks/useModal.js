import { useState, useEffect } from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";

export default function useModal () {
    const md = new MarkdownIt(); //Gracias ManzDev por la Librería y por estar!
    const [project, _setProject] = useState(undefined)
    const [modal, _setModal] = useState(undefined)
    const setModal = (project) => (_setProject(project))
    const closeModal = () => {
        _setModal(undefined)
        _setProject(undefined)
    }
    useEffect(() => {
        if (project) {
            axios.get(`https://raw.githubusercontent.com/${project.userName}/${project.name}/main/README.md`)
                .then((response) => { _setModal({ __html: md.render(response.data) }) })
                .catch(() => { closeModal() })
        }
    }, [project])
    return { modal, setModal, closeModal }
}