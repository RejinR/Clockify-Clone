import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import TimeTracker from '../../components/TimeTracker/TimeTracker';

const initialState = {
    timings: null,
    project: '',
};
const TimeTrackerContainer = (props) => {
    const {
        onAddTiming,
        rowToEdit,
    } = props;
    const [timeTracker, setTimeTracker] = React.useState(rowToEdit || initialState);
    const onChange = (e) => {
        setTimeTracker({
            ...timeTracker,
            project: e.target.value,
        });
    };
    const onConfirmTiming = (timings) => {
        setTimeTracker(initialState);
        onAddTiming({
            ...timeTracker,
            timings,
        });
    };
    return (
        <Grid container>
            <Grid item sm={4}>
                <TextField
                    placeholder="Search Project"
                    variant="outlined"
                    size="small"
                    onChange={onChange}
                    value={timeTracker.project}
                    fullWidth
                />
            </Grid>
            <Grid item sm={8} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <TimeTracker
                    onConfirmTiming={onConfirmTiming}
                />
            </Grid>
        </Grid>
    );
};

TimeTrackerContainer.propTypes = {
    onAddTiming: PropTypes.object,
};

TimeTrackerContainer.defaultProps = {
    onAddTiming: {},
};

export default TimeTrackerContainer;

