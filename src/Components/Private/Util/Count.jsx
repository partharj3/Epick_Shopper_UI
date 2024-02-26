import React from "react";
import CountUp from "react-countup";

const Count = ({ start, end, suffix }) => {
  return (
    <div className="countup">
      <CountUp
        start={start}
        end={end}
        duration={1}
        delay={0}
        suffix={suffix}
        onEnd={() => console.log("Ended")}
        onStart={() => console.log("Started")}
      >
        {({ countUpRef, start }) => (
          <div>
            <span ref={countUpRef}></span>
            {/* <button onClick={start}> START </button> */}
          </div>
        )}
      </CountUp>
    </div>
  );
};

export default Count;
