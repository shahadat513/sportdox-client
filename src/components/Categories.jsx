import SharedTitle from "./SharedTitle";

const Categories = () => {
    return (
        <div>
            <SharedTitle
                title={"Sports Categories section"}
                subtitle={"A tailored approach to exploring career opportunities that align with your unique skills, interests, and br aspirations, helping you make confident and informed choices for a rewarding professional journey."}
            ></SharedTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-black">
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        
                            src="https://i.ibb.co.com/dLMTHm1/pexels-jeshoots-com-147458-7432.jpg"
                            alt="Shoes"
                            className="rounded-xl h-40 w-56" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Category : Footwear</h2>
                        <p className=""><span className="text-yellow-500 text-3xl">★★★★★</span></p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        
                            src="https://i.ibb.co.com/cJVhTwj/pexels-ma-boite-a-photos-64239-236128.jpg"
                            alt="Shoes"
                            className="rounded-xl h-40 w-56" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Category : Boxing</h2>
                        <p className=""><span className="text-yellow-500 text-3xl">★★★★★</span></p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        
                            src="https://i.ibb.co.com/gv0f5mS/pexels-karolina-grabowska-4966373.jpg"
                            alt="Shoes"
                            className="rounded-xl h-40 w-56" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Category : Badminton</h2>
                        <p className=""><span className="text-yellow-500 text-3xl">★★★★★</span></p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                        
                            src="https://i.ibb.co.com/rZdkbqC/pexels-pixabay-274133.jpg"
                            alt="Shoes"
                            className="rounded-xl h-40 w-56" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Category : Golf</h2>
                        <p className=""><span className="text-yellow-500 text-3xl">★★★★★</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;

