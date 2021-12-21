import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField } from '@mui/material';
import TimeTracker from '../../components/TimeTracker/TimeTracker';
import TimeTrackerContainer from '../TimeTrackerContainer/TimeTrackerContainer';
import TimingTable from '../../components/TimingTable/TimingTable';

const TimeTrackerMainContainer = (props) => {
    const {
        aProp,
    } = props;
    const [timings, setTimings] = React.useState([]);
    const [rowToEdit, setRowToEdit] = React.useState(null);
    const onAddTiming = (timing) => {
        console.log('adding a timing', timing);
        setTimings([
            ...timings,
            timing,
        ])
    };
    const onEditRow = (editRow) => {
        setRowToEdit(editRow);
    };
    const onDeleteRow = (rowToDelete) => {
        const newTimings = timings.filter(aTiming => aTiming.project !== rowToDelete.project);
        setTimings(newTimings);
    };
    console.log('asdua-0d', timings, onAddTiming, aProp);
    return (
        <>
            <TimeTrackerContainer
                onAddTiming={onAddTiming}
                rowToEdit={rowToEdit}
            />
            <TimingTable
                rows={timings}
                onEditRow={onEditRow}
                onDeleteRow={onDeleteRow}
            />
        </>
    );
};

TimeTrackerMainContainer.propTypes = {
    aProp: PropTypes.object,
};

TimeTrackerMainContainer.defaultProps = {
    aProp: {},
};

export default TimeTrackerMainContainer;

