import React, { useState, forwardRef, useImperativeHandle } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default forwardRef((props, ref) => {
    const [selectedDate, setSelectedDate] = useState(null);

    function handleDateChange(d) {
        if (d) {
            d.setHours(0, 0, 0, 0);
        }
        setSelectedDate(d);
    }

    useImperativeHandle(ref, () => {
        return {
            getValue: () => {
                let dateString = null;
                if (selectedDate) {
                    dateString = format(selectedDate, 'MM/dd/yyyy');
                }
                return dateString;
            },
            isCancelAfterEnd: () => {
                return !selectedDate;
            },
            afterGuiAttached: () => {
                if (!props.value) {
                    return;
                }
                // eslint-disable-next-line
                const [_, month, day, year] = props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                let selectedDate = new Date(year, month - 1, day);
                setSelectedDate(selectedDate);
            }
        };
    });

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                style={{ width: '100%', margin: 0, padding: '6px 10px' }}
                margin="normal"
                id="date-picker-dialog"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                variant="inline"
                disableToolbar
                placeholder={'Enter ' + props.column.colId}
            />
        </MuiPickersUtilsProvider>
    )
});
