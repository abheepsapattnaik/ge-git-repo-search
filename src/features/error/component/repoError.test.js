import {shallow} from 'enzyme';
import React from 'react';
import Typography from "@material-ui/core/Typography";
import RepoError from "./repoError";


describe('RepoError', () => {
    it('should create an repo error message component', () => {
        const props = {
            repos: [],
            errorStatus: true
        };
        const repoErrorsTag = shallow(<RepoError {...props}/>);
        const muiTypoTag = repoErrorsTag.find(Typography);
        expect(muiTypoTag.length).toBe(1);
        expect(muiTypoTag.text()).toBe(' Error Occurred');
    });

  it('should create an repo error message component if no results found', () => {
        const props = {
            repos: [],
            errorStatus: false,
            loadingStatus: false,
        };
        const repoErrorsTag = shallow(<RepoError {...props}/>);
        const muiTypoTag = repoErrorsTag.find(Typography);
        expect(muiTypoTag.length).toBe(1);
        expect(muiTypoTag.text()).toBe(' No Results ... ');
    });

it('should create no error message if error is false and loading is true', () => {
        const props = {
            repos: [],
            errorStatus: false,
            loadingStatus: true,
        };
        const repoErrorsTag = shallow(<RepoError {...props}/>);
        const muiTypoTag = repoErrorsTag.find(Typography);
        expect(muiTypoTag.length).toBe(0);
    });


});