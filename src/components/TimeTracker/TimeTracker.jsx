import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from '@mui/material';
import { getTimeSpentString } from '../../util/CommonUtils';

let intervalTracker = null;

const TimeTracker = (props) => {
    const {
        onConfirmTiming,
    } = props;
    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const onStart = () => {
        setStartTime(new Date());
        setEndTime(new Date());
        intervalTracker = setInterval(() => {
            console.log('calling timer')
            setEndTime(new Date());
        }, 1000);
    };
    const timeSpent = getTimeSpentString(startTime, endTime);
    const onEnd = () => {
        clearInterval(intervalTracker);
        // create the value in table.
        console.log('timings', startTime, endTime);
        setEndTime(null);
        setStartTime(null);
        onConfirmTiming(timeSpent);
    };
    console.log('09aus0d9asda', timeSpent);
    return (
        <>
            <Grid item sm={12}>
                {`${timeSpent.hours}:${timeSpent.mins}:${timeSpent.seconds}`}
            </Grid>
            <Grid item sm={6}>
                <Button
                    variant="contained"
                    onClick={startTime ? onEnd : onStart}
                >
                    {startTime ? 'END' : 'START'}
                </Button>
            </Grid>
        </>
    );
};

TimeTracker.propTypes = {
    onConfirmTiming: PropTypes.func,
};

TimeTracker.defaultProps = {
    onConfirmTiming: () => {},
};

export default TimeTracker;

