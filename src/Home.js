import TopicList from "./TopicList";
//import UseFetch from "./UseFetch";

//<QuestionList />
const Home = () => {
    //const {data:questions} = UseFetch("http://localhost:8000/questions");
    //{questions && <QuestionList questions = {questions}/>}
    return ( 
        <div className="home">
            <h1>Welcome!!</h1>
            <TopicList/>
        </div>
     );
}
 
export default Home;