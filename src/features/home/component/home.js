import React from 'react';
import {getRepoDetails} from "../../../service/gitRepoService";

const Home = (props) => {
    let allRepos;
    getRepoDetails('abheepsa', props).then(details => {
        allRepos = details
    });
    return <div> Home Page</div>
}

export default Home;