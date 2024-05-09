import updateComponent from "../components/updateComponents.js";
import data from "../data.js";
import dom from "../dom.js";


const resetHandler = () => {
    data.intervalId && clearInterval(data.intervalId);
    data.intervalId = null;

    data.minutes = 0;
    data.seconds = 0;
    data.milliseconds = 0;

    updateComponent(dom.time, data);
}

export default resetHandler