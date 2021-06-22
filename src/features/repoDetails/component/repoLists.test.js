import {shallow} from 'enzyme';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import RepoLists from "./repoLists";
import {ListItem, Typography} from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";


describe('RepoLists', () => {
    it('should create an repo details component', () => {
        const props = {
            repos: [
                {
                    description: 'description',
                    forks: 12,
                    watchers:1,
                    licenseKey: 'licenseKey',
                    name:'name',

                },
                {
                    description: 'description',
                    forks: 12,
                    watchers:1,
                    licenseKey: 'licenseKey',
                    name:'name',

                },
            ],
        };
        const repoDetailsTag = shallow(<RepoLists {...props}/>);
        const muiListItemTag = repoDetailsTag.find(ListItem);
        const muiListItemAvatarTag = repoDetailsTag.find(ListItemAvatar);
        expect(muiListItemTag.length).toBe(2);
        expect(muiListItemAvatarTag.length).toBe(2);
    });


});