import Typography from "@material-ui/core/Typography";

const RepoError = (props) => {
    return <div>
        {!props.errorStatus && !props.repos.length && !props.loadingStatus && <Typography> No Results ... </Typography>}
        {!!props.errorStatus && <Typography variant={'subtitle1'}> Error Occurred</Typography>}
    </div>;

}
export default RepoError;