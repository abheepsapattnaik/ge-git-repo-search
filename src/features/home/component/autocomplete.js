import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TOP_REPOSITORIES} from "../../../common/constants";

export default function RepoAutocomplete(props) {
    return (
        <Autocomplete
            id="repo-option"
            options={TOP_REPOSITORIES}
            getOptionLabel={(object) => object.title}
            onChange={props.getSelectedRepo}
            style={{width: "40vw", paddingTop: 15, paddingBottom: 10}}
            renderInput={(params) =>
                <TextField {...params} label="Select Repository" variant="outlined"/>}
        />
    );
}

