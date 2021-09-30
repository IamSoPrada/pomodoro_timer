import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@mui/material/Card";
import ReplayIcon from "@mui/icons-material/Replay";
import Settings from "../Settings/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSound } from "use-sound";
import sound from "../../sounds/mixkit-marimba-waiting-ringtone-1360.wav";
import "./Timer.css";

const useStyles = makeStyles({
  cardWrapper: {
    padding: 10,
  },
  btns: {
    marginRight: 20,
  },
  btnsWrapper: {
    alignItems: "center",
    paddingTop: 30,
  },
  volumeDown: {
    cursor: "pointer",
  },
  stopBtn: {
    backgroundColor: "red",
  },
  playBtn: {
    backgroundColor: "green",
  },
});

export default function Timer() {
  const [key, setKey] = useState(0);
  const [play, setPlay] = useState(false);
  const [duration, setDuration] = useState(1200);
  const [finished, setFinished] = useState(false);

  const classes = useStyles();
  const [playOn, { stop }] = useSound(sound, { volume: 0.9 });

  const handleSelect = (event) => {
    setDuration(event.target.value);
    setKey((prevKey) => prevKey + 1);
  };

  const handleReload = () => {
    setKey((prevKey) => prevKey + 1);
    setPlay(false);
  };
  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (remainingTime === 0) {
      setFinished(true);
      return "Таймер запуститься автоматически через 5 мин.";
    } else if (key > 0 || remainingTime > 0) {
      setFinished(false);
    }

    return (
      <div className='time'>
        <div className='value'>{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  return (
    <div className='timer'>
      <Card className={classes.cardWrapper} sx={{ maxWidth: 375 }}>
        <CardContent>
          <VolumeDownIcon
            className={classes.volumeDown}
            onClick={() => stop()}
          />
          <CountdownCircleTimer
            key={key}
            isPlaying={play}
            duration={duration}
            strokeWidth={12}
            size={250}
            colors={[["#4C5866"]]}
            onComplete={() => [true, 300000, playOn()]}>
            {renderTime}
          </CountdownCircleTimer>

          <div className={classes.btnsWrapper}>
            <Button
              className={classes.btns}
              variant='contained'
              size='large'
              onClick={() => handleReload()}>
              <ReplayIcon />
            </Button>
            <Button
              variant='contained'
              size='large'
              className={play ? classes.stopBtn : classes.playBtn}
              disabled={finished}
              onClick={() => setPlay(!play)}>
              {play ? <StopCircleIcon /> : <PlayArrowIcon />}
            </Button>
          </div>
          <Settings onSelect={handleSelect} duration={duration} />
        </CardContent>
      </Card>
    </div>
  );
}
