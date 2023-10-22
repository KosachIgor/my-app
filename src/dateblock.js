import { useState } from "react";
const getTimeFromDate = (date) => date.toISOString().substring(11, 19);

export const MyComponent = () => {
    const date = new Date();

    const [currentDate, setCurrentDate] = useState(new Date());
    setTimeout(() => {
        setCurrentDate(new Date());
    }, 1000);

    const currentTime = getTimeFromDate(currentDate);

    return (
        <div>
            {String(date)},{currentTime}
        </div>
    );
};
