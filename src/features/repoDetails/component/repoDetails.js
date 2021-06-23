import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";
import RepoError from "../../error/component";
import '../../../common/component/App.css';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    loader: {
        padding: 15
    }
}));

const RepoDetails = (props) => {
    const classes = useStyles();
    const {
        loadMore = () => {
        }, repos = []
    } = props;
    return <div>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={true}
            loader={<div className={classes.loader} key={0}>Loading Items...</div>}
        >
            {!!repos.length && <RepoLists repos={repos}/>}
            <RepoError{...props}/>
        </InfiniteScroll>

    </div>
}

export default RepoDetails;