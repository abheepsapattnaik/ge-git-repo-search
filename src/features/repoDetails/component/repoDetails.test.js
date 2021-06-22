import {shallow} from 'enzyme';
import React from 'react';
import RepoDetails from "./repoDetails";
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";
import RepoError from "../../error/component";


describe('RepoDetails', () => {
    it('should create an repo details component', () => {
        const props = {
            repos: [{prop1: 'value'}],
            loadMore: jest.fn(),
        };
        const repoDetailsTag = shallow(<RepoDetails {...props}/>);
        const muiInfiniteScrollTag = repoDetailsTag.find(InfiniteScroll);
        expect(muiInfiniteScrollTag.length).toBe(1);
    });

    it('should create an repo details component with empty list', () => {
        const props = {
            loadMore: jest.fn(),
        };
        const repoDetailsTag = shallow(<RepoDetails {...props}/>);
        const muiInfiniteScrollTag = repoDetailsTag.find(InfiniteScroll);
        const muiRepoListTag = repoDetailsTag.find(RepoLists);
        const muiRepoErrorTag = repoDetailsTag.find(RepoError);
        expect(muiInfiniteScrollTag.length).toBe(1);
        expect(muiRepoErrorTag.length).toBe(1);
        expect(muiRepoListTag.length).toBe(0);
    });
});