import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "../../../common/component/App.css"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '80vw',
        backgroundColor: theme.palette.background.paper,
        cursor: 'pointer',
    },
    inline: {
        display: 'inline',
    }
}));

export default function RepoLists(props) {
    const classes = useStyles();

    const openInNewTab = (url) => {
        const newWindow = window.open(url)
        if (newWindow) newWindow.opener = null
    }

    return (
        <List className={classes.root}>
            {props.repos.map(eachRepo => (
                <div key={eachRepo.name} onClick={() => openInNewTab(eachRepo.url)}
                     className="list">
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt={eachRepo.name} src={eachRepo.ownerAvatar}/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={eachRepo.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {eachRepo.description}
                                    </Typography>
                                    <div>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textSecondary"
                                        >
                                            Forks: {eachRepo.forks} &nbsp;
                                        </Typography>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textSecondary"
                                        >
                                            Watchers: {eachRepo.watchers} &nbsp;
                                        </Typography>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textSecondary"
                                        >
                                            LicenseKey: {eachRepo.licenseKey} &nbsp;
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textSecondary"
                                        >
                                            Updated on: {eachRepo.updatedDate} &nbsp;
                                            Created on: {eachRepo.createdDate} &nbsp;
                                        </Typography>
                                    </div>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </div>))}
        </List>
    );
}

