import {Link} from 'react-router-dom';
const TopicList = () => {

    const historyPrompt = "Give 5 mcq questions on History with 4 options and answer in JSON format:";
    const politicsPrompt = "Give 5 mcq questions on Politics with 4 options and answer in JSON format:";
    const sciencePrompt = "Give 5 mcq questions on Science with 4 options and answer in JSON format:";
    const geographyPrompt = "Give 5 mcq questions on Geography with 4 options and answer in JSON format:";
    const aptitudePrompt = "Give 5 mcq questions on Aptitude with 4 options and answer in JSON format:";

    return ( 
        <div className="topic-list">
            <div className="topic-grp">
                <Link to={{ pathname: '/details', state: { prompt: historyPrompt, topic: 'History' } }}>
                    <h2>History</h2>
                </Link>
            </div>
            <div className="topic-grp">
                <Link to={{ pathname: '/details', state: { prompt: politicsPrompt, topic: 'Politics' } }}>
                    <h2>Politics</h2>
                </Link>
            </div> 
            <div className="topic-grp">
                <Link to={{ pathname: '/details', state: { prompt: sciencePrompt, topic: 'Science' } }}>
                    <h2>Science</h2>
                </Link>
            </div>
            <div className="topic-grp">
                <Link to={{ pathname: '/details', state: { prompt: geographyPrompt, topic: 'Geography' } }}>
                    <h2>Geography</h2>
                </Link>
            </div>
            <div className="topic-grp">
                <Link to={{ pathname: '/details', state: { prompt: aptitudePrompt, topic: 'Aptitude' } }}>
                    <h2>Aptitude</h2>
                </Link>
            </div>
            
        </div>
     );
}
 
export default TopicList;