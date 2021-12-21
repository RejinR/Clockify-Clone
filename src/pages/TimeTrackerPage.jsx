import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TimeTrackerMainContainer from '../container/TimeTrackerMainContainer/TimeTrackerMainContainer';

const useStyles = makeStyles({
    root: {
        padding: '1rem',
    },
});

const TimeTrackerPage = (props) => {
    const {
        aProp,
    } = props;
    const classes = useStyles();
    const [sampleState, setSampleState] = React.useState();
    console.log(aProp, sampleState, setSampleState);
    console.log('time tracker page');
    return (
        <Grid container>
            <Grid item sm={12}>
                <Paper
                    variant="outlined"
                    square
                    classes={{
                        root: classes.root,
                    }}
                >
                    <TimeTrackerMainContainer />
                </Paper>
            </Grid>
        </Grid>
    );
};

TimeTrackerPage.propTypes = {
    aProp: PropTypes.object,
};

TimeTrackerPage.defaultProps = {
    aProp: {},
};

export default TimeTrackerPage;

