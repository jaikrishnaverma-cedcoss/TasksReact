import React, { useState } from 'react'

function Task3() {
let interval = "";
const [state,setState]= useState({ counter: 0, message: "", sepCounter: 0, number: 0, timer: '00:00:00',show: '00:00:00',flag:true})

let CounterTime = (event) => {

        let today = new Date();
        let hr = today.getHours();
        let min = today.getMinutes();
        let sec = today.getSeconds();
        if (state.number === 0) {
            interval = setInterval(() => {
                sec = sec - 1;
                if (sec < 0) {
                    min = min - 1;
                    sec = 59;
                }
                if (min < 0) {
                    hr = hr - 1;
                    min = 59
                }
                setState({...state, timer: hr + "h " + min + "m " + sec + "s" });
                if (hr < 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }
        setState({...state,number: state.number + 1 })
    }
    let stopwatch = 1;
    let myInterval;
    let action = "Start";
    let t = [{ hour: 0, minute: 0, second: 0, milisecond: 0 }];
    const iterator = () => {
        if (stopwatch % 2 !== 0) {
            action = "Stop";
            myInterval = setInterval(() => {
                Stopwatch(`${t[0].hour}:${t[0].minute}:${t[0].second}:${parseInt(t[0].milisecond / 10)}`);
                if (t[0].milisecond === 1000) {
                    t[0].second += 1;
                    t[0].milisecond = 0;
                } if (t[0].second === 60) {
                    t[0].minute += 1;
                    t[0].second = 0
                }
                if (t[0].minute === 60) {
                    t[0].hour += 1;
                    t[0].minute = 0
                }
                if (t[0].hour === 13) {
                    // t[0].hour+=1;
                    t[0].minute = 0
                }
                t[0].milisecond += 1;
            }, 1);
        }
        else {
            action = "Start";
            clearInterval(myInterval);
            Stopwatch(`${t[0].hour}:${t[0].minute}:${t[0].second}:${parseInt(t[0].milisecond / 10)}`);
        }
        stopwatch++;
    }
    const reset = () => {
        Stopwatch("00:00:00:00");
        stopwatch = 1;
        clearInterval(myInterval);
        t = [{ hour: 0, minute: 0, second: 0, milisecond: 0 }];
    }
    const Stopwatch = (shower) => {
        setState({...state, show: shower });
    }
  return (
   <>
       <h1 id="h1">React Coun Down Timer</h1>
                <h1>{state.timer}</h1>
                <button className='btn btn-warning' onClick={CounterTime}>START</button>
                {/* <h3>Q4. Create a stop watch.</h3>
                <h1 id="h1">React StopWatch</h1>
                <h1>{state.show}</h1>
                <div style={{ display: "flex", justifyContent: "space-between", width: "350px", marginBottom: "100px" }}>
                    <button onClick={iterator}>START</button>
                    <button onClick={iterator}>PAUSE</button>
                    <button onClick={iterator}>RESUME</button>
                    <button onClick={reset}>RESET</button>
                </div> */}
   </>
  )
}

export default Task3