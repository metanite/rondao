import React, { useState, useEffect, useRef }  from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

//triggerStart value defined as start option here 
//https://greensock.com/docs/v3/Plugins/ScrollTrigger
const HackerText = ({children, tag, text, speed, delay, triggerStart, id, className}) => {
  const ref = useRef(null);
  const CustomTag = (typeof tag === "undefined") ? 'p' : tag
  const speedTime = (typeof speed === "undefined") ? 70 : speed
  const delayTime = (typeof delay === "undefined") ? 0 : delay
  const [dynamicText, setDynamicText] = useState(text);
  const [style, setStyle] = useState({visibility: 'hidden'});

  useEffect(() => {
    const textArr = text.split('')
    let step = -1;
    let startTextResolve = false

    const hackerEffect = () => {
      setStyle({visibility: 'visible'})

      setTimeout(() => {
        startTextResolve = true
      }, delayTime)
      // console.log(ref.current.offsetWidth)

      const interval = setInterval(() => {
        if(startTextResolve) step++
        if(step > textArr.length) {
          clearInterval(interval)
        }

        const newText = textArr.map((char, i) => {
          return (i < step) ? char : random("0123456789");
        })
        setDynamicText(newText.join(''))

      }, speedTime)
    }

    if (typeof triggerStart === "undefined") {
      hackerEffect();
    }
    else {
      let start = () => {}
      const trigger = new Promise((res) => {
        start = res
      })
      ScrollTrigger.create({
        trigger: ref.current,
        start: triggerStart,
        once: true,
        onEnter: () => {
          start();
        },
      });
      trigger.then(() => {
        hackerEffect()
      })
    }
  }, [])

  return (
    <CustomTag style={style} ref={ref} id={id} className={className}>
      {dynamicText}
    </CustomTag>
  )
}

const random = (set) => set[Math.floor(Math.random() * set.length)];

export default HackerText

