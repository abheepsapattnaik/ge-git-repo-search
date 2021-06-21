import axios from 'axios';

const transformData = (repoDetails) => {
    return {
        total: repoDetails['total_count'],
        repos: repoDetails.items.map(each => {
            const {name, description, owner, license, forks, watchers} = each;
            return {
                name, description,
                ownerAvatar: owner?.avatar_url,
                licenseKey: license?.key,
                forks,
                watchers
            }
        })
    }
}


export const getRepoDetails = (searchKeyword, props) => {
    return axios
        .get(`https://api.github.com/search/repositories?q=${searchKeyword}`)
        .then(response => props.loadSuccess(transformData(response.data))
        )
        .catch(() => props.loadError());

}