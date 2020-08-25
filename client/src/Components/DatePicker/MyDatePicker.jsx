import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default forwardRef((props, ref) => {
    const [selectedDate, setSelectedDate] = useState(null);

    function handleDateChange(d) {
        if (d) {
            // set time to midnight
            d.setHours(0, 0, 0, 0);
        }
        setSelectedDate(d);
    }

    useEffect(props.onDateChanged, [selectedDate])

    useImperativeHandle(ref, () => {
        return {
            getDate: () => {
                return selectedDate;
            },
            setDate: d => {
                handleDateChange(d);
            }
        };
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </MuiPickersUtilsProvider>
    )
})
