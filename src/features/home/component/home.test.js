import {shallow} from 'enzyme';
import React from 'react';
import Home from "./home";
import RepoAutocomplete from "./autocomplete";
import RepoDetails from "../../repoDetails/component";
import {Typography} from "@material-ui/core";

describe('Home', () => {
    it('should create an Home component', () => {
        const props = {
            searchInput: 'search'
        };
        const homeTags = shallow(<Home {...props}/>);
        const muiAutocompleteTag = homeTags.find(RepoAutocomplete);
        const muiRepoDetailTag = homeTags.find(RepoDetails);
        expect(muiAutocompleteTag.length).toBe(1);
        expect(muiRepoDetailTag.length).toBe(1);
    });

    it('should create an Home component with no search text', () => {
        const props = {
            searchInput: ''
        };
        const homeTag = shallow(<Home {...props}/>);
        const muiAutocompleteTag = homeTag.find(RepoAutocomplete);
        const muiRepoDetailTag = homeTag.find(RepoDetails);
        const muiMessageTag = homeTag.find(Typography);
        expect(muiAutocompleteTag.length).toBe(1);
        expect(muiRepoDetailTag.length).toBe(0);
        expect(muiMessageTag.length).toBe(1);
        expect(muiMessageTag.text()).toBe(' Start Typing ...');
    });
});