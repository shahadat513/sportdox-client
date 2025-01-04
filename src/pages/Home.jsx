
import Banner from "../components/Banner";
import Faq from "../components/Faq";
import OurServices from "../components/OurServices";
import HomeCard from "../components/HomeCard";
import Categories from "../components/Categories";
import { useTheme } from "../components/ThemeContext";

const Home = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
            <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800">
                <h1 className="text-2xl font-bold">Home Page</h1>
                <button
                    onClick={toggleTheme}
                    className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 dark:bg-yellow-500 dark:text-black dark:hover:bg-yellow-600"
                >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>
            <Banner />
            <HomeCard />
            <Categories />
            <OurServices />
            <Faq />
        </div>
    );
};

export default Home;
