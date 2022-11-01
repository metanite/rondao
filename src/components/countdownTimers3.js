import React, { useState, useEffect }  from 'react';

const CountdownTimers3 = ({className}) => {

  const [hideTimer, setHideTimer] = useState(true);
  const [days, setDays] = useState('__');
  const [hours, setHours] = useState('__');
  const [minutes, setMinutes] = useState('__');
  const [seconds, setSeconds] = useState('__');

  useEffect(() => {
    let timer = null;
    let countDownDate = new Date("2022-11-14T15:00:00.000Z").getTime();
    let currentDate = new Date();

    if(currentDate.getTime() > countDownDate) {
      setHideTimer(true);
      return
    }

    setHideTimer(false);
    // Update the count down every 1 second
    timer = setInterval(function() {

      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days.toString()
      if(days.length < 2) {
        setDays(('0' + days).slice(-2))
      }
      else {
        setDays(days)
      }
      setHours(('0' + hours).slice(-2))
      setMinutes(('0' + minutes).slice(-2))
      setSeconds(('0' + seconds).slice(-2))

      let currentDate = new Date();
      if(currentDate.getTime() > countDownDate) {
        setHideTimer(true);
        clearInterval(timer)
        return
      }

      }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (    
    <>
      <p className="countdown-timer-section-s3-code">
          {countdownTextFirst}<span className="countdown-timer-section-s3-code-one">{countdownTextSecond}</span>{countdownTextThird}</p>
      <div className="w-100 d-flex justify-content-center">
        <a href="https://trons3.devpost.com/" id="hackathon-s3-cta" rel="noopener noreferrer" target="_blank">
            <button className="px-5">Join HackaTRON!</button>
        </a>
      </div>
      <div className={`countdown-timer align-items-center`} style={{display: (hideTimer) ? 'none' : 'flex'}}>

        <CountdownTimerCircle timeUnit="days" digits={days} maxVal={365}/>
          <div className="countdown-timer-section-s3-dash"/>
        <CountdownTimerCircle timeUnit="hours" digits={hours} maxVal={24}/>
          <div className="countdown-timer-section-s3-dash"/>
        <CountdownTimerCircle timeUnit="minutes" digits={minutes} maxVal={60}/>
          <div className="countdown-timer-section-s3-dash"/>
        <CountdownTimerCircle timeUnit="seconds" digits={seconds} maxVal={60}/>
      </div>
      <p className="countdown-timer-section-s3-code py-5">
        {countdownTextFourth}
      </p>
        <div className="row countdown-timer-section-s3-br py-5 no-gutters text-center">
          <div className="col">{br}</div>
          <div className="col">{br}</div>
          <div className="col">{br}</div>
          <div className="col d-md-block d-none">{br}</div>
          <div className="col d-md-block d-none">{br}</div>
          <div className="col d-md-block d-none">{br}</div>
          <div className="col d-md-block d-none">{br}</div>
        </div>
    </>
  )
}

const r = 46;
const c = 289.027;
const countdownTextFirst = "<div class=“";
const countdownTextSecond = "countdown";
const countdownTextThird = "”>";
const countdownTextFourth = "</div>";
const br = "<br>";
const CountdownTimerCircle = ({digits, timeUnit, maxVal}) => {
  const [strokeDashoffset, setStrokeDashoffset] = useState(0);
  useEffect(() => {
    let percent = 1 - (parseInt(digits) / maxVal);
    let newStrokeDashoffset = percent * c;
    if(parseInt(c) === parseInt(newStrokeDashoffset)) {
      newStrokeDashoffset = 0
    }
    setStrokeDashoffset(newStrokeDashoffset)
  }, [digits])

  return (
    <div className="countdown-timer-section-s3" data-pct="100">
      <svg id="svg" width="100" height="100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle className="bg-circle" r={r} cx="50" cy="50" fill="transparent" strokeDasharray={c} strokeDashoffset="0"></circle>
        <circle id="bar" r={r} cx="50" cy="50" fill="transparent" strokeDasharray={c} strokeDashoffset="0" style={{strokeDashoffset: `${strokeDashoffset}px`}}></circle>
      </svg>
      <div className="time-slot-container-wrap">
        <div className={`time-slot-container ${(digits[2] !== undefined) ? 'time-slot-3-digits' : ''}`}>
          <div className="time-slot" id="hours-slot-0">
            {digits[0]}
          </div>
          <div className="time-slot" id="hours-slot-1">
            {digits[1]}
          </div>
          {
            digits[2] !== undefined &&
            <div className="time-slot" id="hours-slot-2">
              {digits[2]}
            </div>
          }
        </div>
        <div className="unit">
          {timeUnit}
        </div>
      </div>
    </div>
  )
}

export default CountdownTimers3

