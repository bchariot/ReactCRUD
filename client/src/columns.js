export const columnDefs = [
  {
    headerName: '*Full Name',
    field: 'name',
    width: 80, sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
    cellEditor: 'validationEditor',
    cellEditorParams: {
      condition: value => value !== undefined && value.length > 0
    }
  },
  {
    headerName: 'Email',
    field: 'email',
    width: 100, sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
    cellEditor: 'validationEditor',
    cellEditorParams: {
      condition: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    }
  },
  {
    headerName: 'IP Address',
    field: 'ip_address',
    width: 60, sortable: true, unSortIcon: true, filter: 'agTextColumnFilter', floatingFilter: true, resizable: true,
    cellEditor: 'validationEditor',
    cellEditorParams: {
      condition: value => /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
    }
  },
  {
    headerName: '*Rate',
    field: 'rate',
    width: 50, sortable: true, unSortIcon: true, filter: 'agNumberColumnFilter', floatingFilter: true, resizable: true,
    cellEditor: 'validationEditor',
    cellEditorParams: {
      condition: value => /^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/.test(value)
    }
  },
  {
    headerName: 'D.O.B.',
    field: 'birth_date',
    width: 70, sortable: true, unSortIcon: true, filter: 'agDateColumnFilter', floatingFilter: true, resizable: true,
    cellEditor: 'dateEditor',
    filterParams: {
      clearButton: true,
      suppressAndOrCondition: true,
      comparator: function(filterLocalDateAtMidnight, cellValue) {
        var dateAsString = cellValue;
        var dateParts = dateAsString.split('/');
        var cellDate = new Date(
          Number(dateParts[1]) - 1,
          Number(dateParts[2]),
          Number(dateParts[0])
        );
        if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
          return 0;
        }
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        }
        if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        }
      }
    }
  },
  {
    headerName: 'Actions',
    colId: 'actions',
    cellRenderer: 'actionsRenderer',
    editable: false,
    filter: false,
    resizable: true,
    width: 80
  }
];

export const defaultColDef = {
  editable: true,
  resizable: true,
  filter: true,
  floatingFilter: true,
  suppressKeyboardEvent: params => params.editing
};
