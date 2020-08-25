import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { columnDefs, defaultColDef } from "./columns";
import GridComponents from "./Components";

import { uuid } from "uuidv4";
import "./App.css";

function App() {
  const [rowData, setRowData] = useState(null);

  const frameworkComponents = {
    validationEditor: GridComponents.ValidationEditor,
    agDateInput: GridComponents.MyDatePicker,
    dateEditor: GridComponents.DateEditor,
    actionsRenderer: GridComponents.ActionsRenderer,
    addRowStatusBar: GridComponents.AddRowStatusBar
  };

  function onGridReady(params) {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => {
        data.forEach(row => (row.id = uuid()));
        setRowData(data);
      })
      .then(result => params.api.sizeColumnsToFit());
  }

  return (
    <div className="my-app">
      <div
        id="myGrid"
        style={{ height: "100%", width: "100%" }}
        className="ag-theme-alpine"
      >
        <AgGridReact
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowData={rowData}
          getRowNodeId={data => data.id}
          onGridReady={onGridReady}
          frameworkComponents={frameworkComponents}
          editType="fullRow"
          suppressClickEdit
          statusBar={{
            statusPanels: [{ statusPanel: "addRowStatusBar" }]
          }}
        />
      </div>
    </div>
  );
}

export default App;
