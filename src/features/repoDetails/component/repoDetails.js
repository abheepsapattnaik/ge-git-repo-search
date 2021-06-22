import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";
import {Typography} from "@material-ui/core";

const RepoDetails = (props) => {

    const {
        loadMore = () => {
        }, repos = []
    } = props;
    return <div>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading Next Items...</div>}
        >
            {!!repos.length &&
            <RepoLists repos={repos}/>
            }
            {!repos.length && <Typography> No Results ... </Typography>}
        </InfiniteScroll>

    </div>
}

export default RepoDetails;