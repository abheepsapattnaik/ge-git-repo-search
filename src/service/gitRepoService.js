import axios from 'axios';


export const getRepoDetails = (searchKeyword, props) => {
    return axios
        .get(`https://api.github.com/search/repositories?q=${searchKeyword}`)
        .then(response => response.data.items)
        .catch(() => props.loadError());

}