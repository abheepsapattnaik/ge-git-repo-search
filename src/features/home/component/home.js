import React from 'react';
import {getRepoDetails} from "../../../service/gitRepoService";
import RepoAutocomplete from "./autocomplete";
import RepoLists from "./repoLists";

const Home = (props) => {
    let allRepos;

    return <div style={{
        display: 'block',
        justifyContent: 'space-around',
        padding: 40,
        height: '89vh'
    }}>
        <div style={{margin: '100 auto', paddingBottom: 10}}>
            <RepoAutocomplete
                getSelectedRepo={(event, repoKeyword) => {
                    props.onSearchChange(repoKeyword?.title.toLowerCase() || '');
                    if (!!repoKeyword) {
                        getRepoDetails(repoKeyword.title, props).then(repoList => {
                            // allRepos = repoList;
                        })
                        console.log(allRepos)
                    }
                }
                }/>

        </div>
        {!!props.repoList && <RepoLists repos={props.repoList}/>}
    </div>
}

export default Home;