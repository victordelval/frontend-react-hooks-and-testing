import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
}));

function Selector({ data, selected, handleChange }) {
  const classes = useStyles();
  console.log("****** render >> selected", selected)
  console.log(selected ? selected.name : '')
  return (
    <div align="center">
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={selected ? selected.name : ''}
          onChange={e => handleChange(e)}
          inputProps={{
            name: "selectorbox",
            id: "selectorbox"
          }}
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          {data.map(item => 
            <MenuItem key={item.id} value={item}>{item.name}</MenuItem>  
          )}
        </Select>
      </FormControl>
    </div>
  );
}

export default Selector;
