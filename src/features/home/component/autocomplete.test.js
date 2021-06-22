import {shallow} from 'enzyme';
import React from 'react';
import {Autocomplete} from '@material-ui/lab';
import RepoAutocomplete from "./autocomplete";

describe('RepoAutocomplete', () => {
    it('should create an autocomplete component', () => {
        const props = {
            getSelectedRepo: jest.fn()
        };
        const autocompleteTag = shallow(<RepoAutocomplete {...props}/>);
        const muiAutocompleteTag = autocompleteTag.find(Autocomplete);
        expect(muiAutocompleteTag.length).toBe(1);
    });
});