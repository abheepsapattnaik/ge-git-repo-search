import axios from 'axios';

const transformData = (repoDetails) => {
    return {
        total: repoDetails['total_count'],
        repos: repoDetails.items.map(each => {
            const {name, description, owner, license, forks, watchers, html_url, created_at, updated_at} = each;
            return {
                name, description,
                ownerAvatar: owner?.avatar_url,
                licenseKey: license?.key,
                forks,
                watchers,
                url: html_url,
                createdDate: created_at,
                updatedDate: updated_at
            }
        })
    }
}


export const getRepoDetails = (searchKeyword, props, page = 1) => {
    return axios
        .get(`https://api.github.com/search/repositories?q=${searchKeyword}&page=${page}`)
        .then(response => {
                if (page === 1) {
                    return props.loadSuccess(transformData(response.data));
                } else {
                    return props.loadReposMoreSuccess(transformData(response.data));
                }
            }
        )
        .catch(() => props.loadError());

}