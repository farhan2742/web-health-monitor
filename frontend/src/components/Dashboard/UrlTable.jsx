// Import Statements

import React,{ useState, useEffect } from 'react'                                                 // React Library Components
import { DataGrid } from '@mui/x-data-grid';                                                      // DataGrid Component from Meterial UI
import Button from '@mui/material/Button';                                                        // Button Component from Meterial UI
import TextField from '@mui/material/TextField';                                                  // TextField Component from Meterial UI
import Dialog from '@mui/material/Dialog';                                                        // Dialog Component from Meterial UI
import DialogActions from '@mui/material/DialogActions';                                          // DialogActions Component from Meterial UI
import DialogContent from '@mui/material/DialogContent';                                          // DialogContent Component from Meterial UI
import DialogContentText from '@mui/material/DialogContentText';                                  // DialogContentText Component from Meterial UI
import DialogTitle from '@mui/material/DialogTitle';                                              // DialogTitle Component from Meterial UI
import Box from '@mui/material/Box';                                                              // Box Component from Meterial UI
import Alert from '@mui/material/Alert';                                                          // Alert Component from Meterial UI
import IconButton from '@mui/material/IconButton';                                                // IconButton Component from Meterial UI
import Collapse from '@mui/material/Collapse';                                                    // Collapse Component from Meterial UI
import CloseIcon from '@mui/icons-material/Close';                                                // Box Component from Meterial UI
import Paper from '@mui/material/Paper';                                                          // CloseIcon Component from Meterial UI
import Backdrop from '@mui/material/Backdrop';                                                    // Backdrop Component from Meterial UI
import CircularProgress from '@mui/material/CircularProgress';                                    // CircularProgress Component from Meterial UI
import './tree.css';                                                                              // Custom CSS Styles for the D3 Chart
import createChart from '../../utils/createChart'                                                 // CreateChart helper funcion
import crud from '../../utils/crudFunctions'                                                      // CRUD Helper Class
import isValidURL from '../../utils/validateURL'                                                  // Validate URL helper function
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
const moment = require("moment");

// Definition Statements

const UrlTable  = () => {                                                                         // URL Data Grid Table Component
  
  // Declare Variables and States
  
  const [urldata,seturldata]= useState([]);                                                       // For setiing response from getURL
  const [urlToAdd, setUrlToAdd] = useState('');                                                   // New URL used when Adding URL
  const [oldUrl, setOldUrl] = useState('');                                                       // Old URL used when updating URL
  const [urlToUpdate, setUrlToUpdate] = useState('');                                             // New URL used when updating URL
  const [openNew, setOpenNew] = useState(false);                                                  // For Opening New URL Dialog
  const [openUpdate, setOpenUpdate] = useState(false);                                            // For Update URL Dialog
  const [openChart, setOpenChart] = useState(false);                                              // For Chart Dialog
  const [openStats, setOpenStats] = useState(false);                                              // For Chart Dialog
  const [openSameURLAlert, setOpenSameURLAlert] = useState(false);                                // For Same URL Alert
  const [openValidURLAlert, setOpenValidURLAlert] = useState(false);                              // For Valid URL Alert
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);                                // For Success Alert
  const [openLoading, setOpenLoading] = useState(false);                                          // For Loading Backdrop
  const [avail,setavail] = useState([]);                                                          // For Availability Metric Chart
  const [currentURL,setCurrentURL] = useState('');                                                // For selected URL in Charts
  const [latency, setlatency] = useState([]);                                                     // For Latency Metric Chart
  let row=[]                                                                                      // For Table Rows
  let avail_time = []                                                                             // For Availability Metric Chart
  let latency_time = []                                                                           // For Latency Metric Chart
  let avail_points=[]                                                                             // For Availability Metric Chart
  let latency_points=[]                                                                           // For Latency Metric Chart
  

  // Declare functions

  // Declare functions to update the availability and latency metric chart data

  const getavail = () => {                                                                        // Configure availability data
    let i=0                                                                                       // Declare iterator variable for array
    avail.sort(function(a,b) {                                                                    // Sort the availability array according to date and time                                                            
      return new Date(a.Timestamp) - new Date(b.Timestamp);                                       // Turn your strings into dates, and then subtract them to get a value that is either negative, positive, or zero.
    });
    avail.forEach( urls => {                                                                      // Loop through the data to configure it for the chart
      avail_points[i]=urls.Average;                                                               // Push availabilty data point in the array
      let Timestamp = moment(urls.Timestamp).format("MMMM Do YYYY, h:mm:ss a");                   // Format the timestamp of the availabilty data point
      avail_time[i] = Timestamp;                                                                  // Push timestamp of the availabilty data point in the array
      i++;                                                                                        // Increment the iterator
    })
  }
  
  const getlatency = () => {                                                                      // Configure availability data
    let i=0                                                                                       // Declare iterator variable for array
    latency.sort(function(a,b){                                                                   // Sort the availability array according to date and time
      return new Date(a.Timestamp) - new Date(b.Timestamp);                                       // Turn your strings into dates, and then subtract them to get a value that is either negative, positive, or zero.
    });
    latency.forEach( urls => {                                                                    // Loop through the data to configure it for the chart
      latency_points[i]=urls.Average;                                                             // Push latency data point in the array
      let Timestamp = moment(urls.Timestamp).format("MMMM Do YYYY, h:mm:ss a");                   // Format the timestamp of the latency data point
      latency_time[i] = Timestamp;                                                                // Push timestamp of the latency data point in the array
      i++;                                                                                        // Increment the iterator
    })
  }

  // Declare functions to Update Table

  const handleRead = async() => {                                                                  // Function to download URLs from DB
    setOpenLoading(true)                                                                           // Set setOpenLoading to true
    let data = await crud.getURL();                                                                // Fetch URLs using Helper Class
    setOpenLoading(false)                                                                          // Set setOpenLoading to true
    seturldata(data)                                                                               // Set seturldata state with downloaded URLs Array
  }

  const getrows = () => {                                                                         // Function to Set Table Rows
    let i=0                                                                                       // Iteration Variable for rows
    urldata.forEach(urls => {                                                                     // Loop Thorugh Fetched URLs
        row[i] = {id: urls._id, URL: urls.url}                                                    // Set Row
        i++                                                                                       // Iterate to next row
    })
  }

  // Declare functions for adding new URLs

  const HandleNewOpen = () => {                                                                   // Function to open new url Dialog
    setOpenNew(true);                                                                             // Set setOpenNew to True
  };

  const handleCreate = async (URL) => {                                                           // Function to add a new URL to DB
    setOpenNew(false)                                                                             // Set setOpenNew to false
    setOpenLoading(true)                                                                          // Set setOpenLoading to true
    if (isValidURL(urlToAdd)) {                                                                   // Check if URL is valid
      let same = false;                                                                           // Variable to check duplicate
      row.forEach(urlRow => {                                                                     // Loop through rows
        if (urlRow.URL.toString() === urlToAdd) {                                                 // If new url is present in rows
          same = true                                                                             // Set duplicate check to true
          setOpenSameURLAlert(true)                                                               // Set setOpenSameURLAlert to true
          setOpenNew(false)                                                                       // Set setOpenNew to false
          setOpenLoading(false)                                                                   // Set setOpenLoading to false
        }
      })
      if (same === false){                                                                        // If new url is not in rows
        await crud.createURL(urlToAdd)                                                            // Add a new url to db using helper class
        await handleRead()                                                                        // Update rows
        setOpenSuccessAlert(true)                                                                 // Set setOpenSuccessAlert to true
        setOpenLoading(false)                                                                     // Set setOpenLoading to false
      }
    }
    else {                                                                                        // URL is not Valid
      setOpenValidURLAlert(true)                                                                  // Open Valid URL Alert
      setOpenLoading(false)                                                                       // Set setOpenLoading to false
    }                                                       
  }

  const handleNewClose = () => {                                                                   // Function to open new url Dialog
    setOpenNew(false);                                                                             // Set setOpenNew to True
  };

  // Declare functions to create D3 Chart

  const handleFetch = async (URL) => {                                                             // Function to download list of sub urls
    setOpenLoading(true)                                                                           // Set setOpenLoading to true
    setCurrentURL(URL)
    let dataGraph = await crud.fetchSubUrls(URL)                                                   // Fetch Sub-URLs using Helper Class
    setOpenLoading(false)                                                                          // Set setOpenLoading to false
    setOpenChart(true);                                                                            // Set setOpenNew to True
    await createChart(dataGraph);                                                                  // Create Hierarchical Chart using helper function
  }

  const handleChartClose = () => {                                                                 // Function to close chart Dialog
    setOpenChart(false);                                                                           // Set setOpenChart to false
  };

  const handleStats = async (URL) => {                                                             // Function to download list of sub urls
    setOpenLoading(true)                                                                           // Set setOpenLoading to true
    let Stats = await crud.fetchStats(URL)                                                         // Fetch Sub-URLs using Helper Class
    setCurrentURL(URL)
    setavail(Stats[0])
    setlatency(Stats[1])
    getavail()
    getlatency()
    setOpenLoading(false)                                                                          // Set setOpenLoading to false
    setOpenStats(true);                                                                            // Set setOpenNew to True
  }

  const handleStatsClose = () => {                                                                 // Function to close chart Dialog
    setOpenStats(false);                                                                           // Set setOpenChart to false
  };

  // Declare functions to update DB

  const handleUpdateOpen = () => {                                                                 // Function to open update url Dialog
    setOpenUpdate(true);                                                                           // Set setOpenUpdate to True
  };

  const handleUpdate = async () => {                                                               // Function to update an url
    setOpenLoading(true)                                                                           // Set setOpenLoading to true
    setOpenUpdate(false)                                                                           // Set setOpenUpdate to false
    if (isValidURL(urlToUpdate)) {                                                                 // Check if new URL is valid
      let same = false;                                                                            // Variable to check duplicate
      row.forEach(urlRow => {                                                                      // Loop through rows
        if (urlRow.URL.toString() === urlToUpdate) {                                               // If new url is present in rows
          same = true                                                                              // Set duplicate check to true
          setOpenSameURLAlert(true)                                                                // Set setOpenSameURLAlert to true
          setOpenLoading(false)                                                                    // Set setOpenLoading to false
        }
      })
      if (same === false){                                                                         // If new url is not in rows
        await crud.updateURLS(oldUrl, urlToUpdate);                                                // Update the url using helper class
        await handleRead()                                                                         // Update rows
        setOpenSuccessAlert(true)                                                                  // Set setOpenSuccessAlert to true
        setOpenLoading(false)                                                                      // Set setOpenLoading to false
      }
    }
    else {                                                                                        // URL is not Valid
      setOpenValidURLAlert(true)                                                                  // Open Valid URL Alert
      setOpenUpdate(false)                                                                        // Close Update New Dialog
      setOpenLoading(false)                                                                       // Set setOpenLoading to false
    }  
  }

  const handleUpdateClose = () => {                                                                // Function to close update url Dialog
    setOpenUpdate(false);                                                                          // Set setOpenUpdate to false
  };

  const handleDelete = async (URL) => {                                                            // Function to delete a url
    setOpenLoading(true)                                                                           // Set setOpenLoading to true
    await crud.deleteURLS(URL);                                                                    // Delete the url using helper class
    await handleRead()                                                                             // Update Rows
    setOpenSuccessAlert(true)                                                                      // Set setOpenSuccessAlert to true
    setOpenLoading(false)                                                                          // Set setOpenLoading to false
  }

  // Declare the options for availability and latency metric charts

  const avail_options = {      
    title: {
      text: 'Availability'
    },
    subtitle: {
      text: currentURL
    },
    yAxis: {
      title: {
        text: 'Availability'
      }
    },
    xAxis: {
      categories : avail_time
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    series: [{
      name: 'Availability',
      data: avail_points
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  const latency_options = {  
    title: {
      text: 'Latency'
    },
    subtitle: {
      text: currentURL
    },
    yAxis: {
      title: {
        text: 'Latency'
      }
    },
    xAxis: {
      categories : latency_time
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    series: [{
      name: 'Latency',
      data: latency_points
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }

  // Create Columns for the Table

  let buttonID = 0;
  const columns = [                                                                                 // Create Table Columns  
    { 
      field: 'id',                                                                                  // Field Name
      headerName: 'ID',                                                                             // Field Header Text
      width: 70,                                                                                    // Field Width
      disableClickEventBubbling: true,                                                              // Disable Event Bubbling on clicking his column
      hide: true                                                                                    // Hide Column
    },
    { 
      field: 'Sub-URLs',                                                                            // Field Name
      headerName: 'Sub-Urls',                                                                       // Field Header Text
      width: 180,                                                                                   // Field Width
      disableClickEventBubbling: true,                                                              // Disable Event Bubbling on clicking his column
      disableColumnMenu: true,                                                                      // Disable Column Menu
      disableReorder: true,                                                                         // Disable Column sorting 
      hideSortIcons: true,                                                                          // Hide Icons for sorting
      renderCell:  (params) => {                                                                    // Set Rendering for this column
        buttonID++
        const onClick = (e) => {                                                                    // onClick Function
          e.stopPropagation();                                                                      // Stop default behavior
          const api = params.api;                                                                   // Create api
          const thisRow = {};                                                                       // Create Row Object
          api                                                                                       // Call Api
            .getAllColumns()                                                                        // Get all columns
            .filter((c) => c.field !== "__check__" && !!c)                                          // Filter columns to find clicked row
            .forEach(                                                                               // Loop Through Rows
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))                       // Enter the required Row Data
            );              
            handleFetch(thisRow["URL"])                                                             // Fetch Sub URLs
        }; 
        return <Button data-testid="ViewSubButton" onClick={onClick} id={"ViewSub"+buttonID} variant="contained" color="primary">View Sub-Urls</Button>;// Display button as rows for this column
      } 
    },
    { 
      field: 'Stats',                                                                               // Field Name
      headerName: 'Stats',                                                                          // Field Header Text
      width: 140,                                                                                   // Field Width
      disableClickEventBubbling: true,                                                              // Disable Event Bubbling on clicking his column
      disableColumnMenu: true,                                                                      // Disable Column Menu
      disableReorder: true,                                                                         // Disable Column sorting 
      hideSortIcons: true,                                                                          // Hide Icons for sorting
      renderCell:  (params) => {                                                                    // Set Rendering for this column
        buttonID++
        const onClick = (e) => {                                                                    // onClick Function
          e.stopPropagation();                                                                      // Stop default behavior
          const api = params.api;                                                                   // Create api
          const thisRow = {};                                                                       // Create Row Object
          api                                                                                       // Call Api
            .getAllColumns()                                                                        // Get all columns
            .filter((c) => c.field !== "__check__" && !!c)                                          // Filter columns to find clicked row
            .forEach(                                                                               // Loop Through Rows
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))                       // Enter the required Row Data
            );           
            handleStats(thisRow["URL"])                                                             // Fetch Sub URLs
        };
        return <Button data-testid="ViewStatsButton" id={"ViewStats"+buttonID} onClick={onClick} variant="contained" color="primary">View Stats</Button>;     // Display button as rows for this column
      } 
    },
    { 
      field: 'URL',                                                                                 // Field Name
      headerName: 'URL',                                                                            // Field Header Text
      width: 400,                                                                                   // Field Width
      disableClickEventBubbling: true                                                               // Disable Event Bubbling on clicking his column
    },
    { 
      field: 'Edit',                                                                                // Field Name
      headerName: '',                                                                               // Field Header Text
      width: 100,                                                                                   // Field Width
      disableClickEventBubbling: true,                                                              // Disable Event Bubbling on clicking his column
      disableColumnMenu: true,                                                                      // Disable Column Menu
      disableReorder: true,                                                                         // Disable Column sorting 
      hideSortIcons: true,                                                                          // Hide Icons for sorting
      renderCell:  (params) => {                                                                    // Set Rendering for this column
        buttonID++
        const onClick = (e) => {                                                                    // onClick Function
          e.stopPropagation();                                                                      // Stop default behavior
          const api = params.api;                                                                   // Create api
          const thisRow = {};                                                                       // Create Row Object
          api                                                                                       // Call Api
            .getAllColumns()                                                                        // Get all columns
            .filter((c) => c.field !== "__check__" && !!c)                                          // Filter columns to find clicked row
            .forEach(                                                                               // Loop Through Rows
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))                       // Enter the required Row Data
            );
          setOldUrl(thisRow["URL"]);                                                                // Set setOldUrl state to this row's URL value
          handleUpdateOpen();                                                                       // Open Update URL Dialog
        };
        return <Button onClick={onClick} data-testid="EditButton" id={"Edit"+buttonID} variant="contained" color="secondary">Edit</Button>;       // Display button as rows for this column
      } 
    },
    { 
      field: 'Delete',                                                                              // Field Name
      headerName: '',                                                                               // Field Header Text
      width: 100,                                                                                   // Field Width
      disableClickEventBubbling: true,                                                              // Disable Event Bubbling on clicking his column
      disableColumnMenu: true,                                                                      // Disable Column Menu
      disableReorder: true,                                                                         // Disable Column sorting 
      hideSortIcons: true,                                                                          // Hide Icons for sorting
      renderCell: (params) => {                                                                     // Set Rendering for this column
        buttonID++
        const onClick = (e) => {                                                                    // onClick Function
          e.stopPropagation();                                                                      // Stop default behavior
          const api = params.api;                                                                   // Create api
          const thisRow = {};                                                                       // Create Row Object
          api                                                                                       // Call Api
            .getAllColumns()                                                                        // Get all columns
            .filter((c) => c.field !== "__check__" && !!c)                                          // Filter columns to find clicked row
            .forEach(                                                                               // Loop Through Rows
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))                       // Enter the required Row Data
            );
          handleDelete(thisRow["URL"])                                                              // Delete URL from DB using helper class
        };
        return <Button onClick={onClick} data-testid="DeleteButton" id={"Delete"+buttonID} variant="contained" color="error">Delete</Button>;         // Display button as rows for this column
      } 
    }
  ];

  useEffect( () => {                                                                                // Before a component is loaded
    handleRead()                                                                                    // Download URLs
  }, []);
  
  return (                                                                                          // Return Code
      <>
      {getrows()}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box display="flex" justifyContent="center" sx={{ paddingBottom: 2}}>
        <Button id="AddNew" data-testid="AddNew" variant="contained" onClick={HandleNewOpen} color="success">
            Add new URL
        </Button>
        <Dialog open={openNew} onClose={handleNewClose} data-testid="AddNewDialog" >
            <DialogTitle>Add new URL</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Please Enter a valid URL in the text box below and press Submit to store it in the DataBase.
            </DialogContentText>
              <TextField
                  autoFocus
                  margin="dense"
                  name="urlToAdd"
                  id="url"
                  label="url"
                  type="url"
                  onChange={e => setUrlToAdd(e.target.value)}
                  value={urlToAdd}
                  fullWidth
                  variant="standard"
                  data-testid="AddNewText"
              />
            </DialogContent>
            <DialogActions>
                <Button id="AddNewCancel" data-testid="AddNewCancel" onClick={handleNewClose}>Cancel</Button>
                <Button id="AddNewSubmit" data-testid="AddNewSubmit" onClick={handleCreate}>Submit</Button>
            </DialogActions>
        </Dialog>
      </Box>
      <Dialog open={openUpdate} onClose={handleUpdateClose} data-testid="EditDialog">
        <DialogTitle>Edit URL</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Please Enter a valid URL in the text box below and press Submit to update the URL.
        </DialogContentText>
          <TextField
              autoFocus
              margin="dense"
              name="urlToUpdate"
              id="newUrl"
              label="newUrl"
              type="url"
              onChange={e => setUrlToUpdate(e.target.value)}
              value={urlToUpdate}
              fullWidth
              variant="standard"
              data-testid="EditText"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose} data-testid="EditClose">Cancel</Button>
          <Button onClick={handleUpdate} data-testid="EditSubmit">Submit</Button>
        </DialogActions>
      </Dialog>
      <Dialog fullScreen open={openChart} onClose={handleChartClose} data-testid="SubDialog">
        <DialogTitle>Sub-URLs</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Below is an hierarcal chart that shows sub urls for the selected URL ({currentURL}).
        </DialogContentText>
          <div id="subUrlChart" data-testid="SubChart">
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChartClose} data-testid="SubClose">Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog fullScreen open={openStats} onClose={handleStatsClose} data-testid="StatsDialog">
        <DialogTitle>URL Stats</DialogTitle>
        <DialogContent>
        <DialogContentText>
            Below are the last 7 days stats of the selected URL ({currentURL}).
        </DialogContentText>
        {getavail()}
        {getlatency()}
          <div id="urlStats">
              <HighchartsReact highcharts={Highcharts} options={avail_options}/>
              <HighchartsReact highcharts={Highcharts} options={latency_options}/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleStatsClose} data-testid="StatsClose">Close</Button>
        </DialogActions>
      </Dialog>
      <Paper> 
        <div style={{ height: 400, width: '100%' }} data-testid="URL_Table">
        <Collapse in={openSuccessAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenSuccessAlert(false);
                  }}
                  data-testid="SuccessAlertClose"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
              severity="success"
              data-testid="SuccessAlert"
            >
              Action completed successfully!
            </Alert>
          </Collapse>
          <Collapse in={openSameURLAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenSameURLAlert(false);
                  }}
                  data-testid="DubAlertClose"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
              severity="error"
              data-testid="DubAlert"
            >
              URL already exists in DB
            </Alert>
          </Collapse>
          <Collapse in={openValidURLAlert}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenValidURLAlert(false);
                  }}
                  data-testid="InvalidAlertClose"
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
              severity="error"
              data-testid="InvalidAlert"
            >
              Please Enter a valid URL. For Example: http://www.example.com
            </Alert>
          </Collapse>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
          />
        </div>
      </Paper>
      </>
  );
}

export default UrlTable;                                                              // Export UrlTable Component