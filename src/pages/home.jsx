import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Стартовая страница</h1>
            <Link to='/game'>Начать игру</Link>
        </>
    );
}

export default Home;