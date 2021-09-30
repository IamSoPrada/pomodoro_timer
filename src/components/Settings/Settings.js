import React from "react";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  settingsTitle: {
    marginBottom: "20px",
  },
  settingsWrapper: {
    padding: "20px",
  },
});

export default function Settings({ onSelect, duration }) {
  const classes = useStyles();
  return (
    <div className={classes.settingsWrapper}>
      <Typography
        className={classes.settingsTitle}
        sx={{ fontSize: 14 }}
        color='text.secondary'
        gutterBottom>
        Настройки
      </Typography>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel>Время</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            label='Time'
            value={duration}
            onChange={onSelect}>
            <MenuItem key={uuidv4()} value={300}>
              5 мин
            </MenuItem>
            <MenuItem key={uuidv4()} value={600}>
              10 мин
            </MenuItem>
            <MenuItem key={uuidv4()} value={900}>
              15 мин
            </MenuItem>
            <MenuItem key={uuidv4()} value={1200}>
              20 мин
            </MenuItem>
            <MenuItem key={uuidv4()} value={1500}>
              25 мин
            </MenuItem>
            <MenuItem key={uuidv4()} value={2100}>
              35 мин
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
