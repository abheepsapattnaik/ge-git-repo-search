import React from 'react';
import {getRepoDetails} from "../../../service/gitRepoService";
import RepoAutocomplete from "./autocomplete";
import RepoDetails from "../../repoDetails/component";
import {Typography} from "@material-ui/core";


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
        margin: '40px 40px 0 40px',
    }}>
        <div style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white"
        }}>

            <RepoAutocomplete
                getSelectedRepo={(event, repoKeyword) => {
                    props.onSearchChange(repoKeyword?.title || '');
                }
                }/>
        </div>
        {!!keyWord.trim().length &&
        <RepoDetails loadMore={loadMore}/>
        }
        {!keyWord.trim().length && <Typography variant={'subtitle1'}> Start Typing ...</Typography>}
    </div>
}

export default Home;