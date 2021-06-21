import React from 'react';
import {getRepoDetails} from "../../../service/gitRepoService";
import RepoAutocomplete from "./autocomplete";
import RepoDetails from "../../repoDetails/component";


const Home = (props) => {
    let keyWord = props.searchInput;
    let page = 1;

    const loadMore = () => {
        if (!!keyWord) {
            getRepoDetails(keyWord, props, page)
                .then(_ => {
                    page += 1;
                })
        }
    }

    return <div style={{
        display: 'block',
        justifyContent: 'space-around',
        padding: 40,
        height: '89vh'
    }}>
        <div style={{margin: '100 auto', paddingBottom: 10}}>
            <RepoAutocomplete
                getSelectedRepo={(event, repoKeyword) => {
                    props.onSearchChange(repoKeyword?.title || '');
                }
                }/>
        </div>
        <RepoDetails loadMore={loadMore}/>
    </div>
}

export default Home;