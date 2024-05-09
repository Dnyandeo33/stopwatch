import updateComponent from "../components/updateComponents.js";
import data from "../data.js";
import dom from '../dom.js';
import updateTime from "../utils/updateTime.js";

const startHandler = () => {
    data.intervalId && clearInterval(data.intervalId);
    data.intervalId = null;

    data.intervalId = setInterval(() => {
        const time = updateTime(data);
        updateComponent(dom.time, time);

    }, 10);
}

export default startHandler
