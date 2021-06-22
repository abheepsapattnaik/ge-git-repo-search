import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";
import RepoError from "../../error/component";


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
            loader={<div className="loader" key={0}>Loading Items...</div>}
        >
            {!!repos.length &&
            <RepoLists repos={repos}/>
            }
            <RepoError{...props}/>
        </InfiniteScroll>

    </div>
}

export default RepoDetails;