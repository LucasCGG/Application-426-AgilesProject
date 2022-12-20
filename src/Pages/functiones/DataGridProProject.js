import * as React from 'react'

import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import { darken, lighten } from '@mui/material/styles';
import { bgcolor } from '@mui/system';

const columns = [
  { field: 'id', headerName: 'ID', width: 10 },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'date',
    width: 100,
    editable: false,
  },
  {
    field: 'Project Name',
    headerName: 'Project name',
    width: 150,
    editable: false,
  },
  {
    field: 'Description',
    headerName: 'Description',
    width: 350,
    editable: false,
  },
  {
    field: 'Status',
    headerName: 'Status',
    width: 150,
    editable: false,
  }
]

export default function DataGridProProject(props) {
  return (
    <Box sx={{ 
      height: 400, 
      m:2,
      '& .super-app-theme--AVAILABLE': {
        bgcolor: "green"
      },
      '& .super-app-theme--PENDING': {
        bgcolor: "yellow"
      },
      '& .super-app-theme--INACTIVE': {
        bgcolor: "red"
      }
      
    
    }}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        getRowClassName={(props) => `super-app-theme--${props.row.Status}`}
      />
    </Box>
  )
}
