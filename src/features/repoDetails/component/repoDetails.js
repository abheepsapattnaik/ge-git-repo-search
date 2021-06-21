import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";

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
            <RepoLists repos={repos}/>
        </InfiniteScroll>

    </div>
}

export default RepoDetails;