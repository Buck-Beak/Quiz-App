import QuestionList from "./QuestionList";
import { useLocation } from "react-router-dom";

const TopicDetails = () => {
    const location = useLocation();
    const state = location.state || {};
    const { prompt, topic } = state;
    if (!prompt || !topic) {
        return <div>Invalid topic details. Please go back and select a valid topic.</div>;
    }
    return ( 
        <div className="topic-details">
            <QuestionList prompt = {prompt}/>
        </div>
     );
}
 
export default TopicDetails;