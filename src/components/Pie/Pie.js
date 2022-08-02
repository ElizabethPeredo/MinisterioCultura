import React from "react";

const cleanPercentage = (percentage) => {
    const tooLow = !Number.isFinite(+percentage) || percentage < 0;
    const tooHigh = percentage > 100;
    return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - pct) * circ) / 100;
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="rgba(5, 0, 0, 0.2)"
            stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
            strokeWidth={"1rem"}
            strokeDasharray={circ}
            strokeDashoffset={pct ? strokePct : 0}
            strokeLinecap="butt"
        ></circle>
    );
};

const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
            fontWeight="bolder"
            fill="white"
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

const Pie = ({ percentage }) => {
    const pct = cleanPercentage(percentage);
    var color;

    if (pct ==100) {
        color = '#138D75';
    } 
    else if (pct > 85) {
        color = '#27AE60';
    } 
    else if (pct > 60) {
        color = '#58D68D';
    }
    else if (pct > 45) {
        color = '#F4D03F';
    }
    else if (pct > 30) {
        color = '#F39C12';
    } 
    else {
        color = '#B71C1C';
    }
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                <Circle colour="lightgrey" />
                <Circle colour={color} pct={pct} />
            </g>
            <Text percentage={pct} />
        </svg>
    );
};

export default Pie;
