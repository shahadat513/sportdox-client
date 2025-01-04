// eslint-disable-next-line react/prop-types
const SharedTitle = ({ title, subtitle }) => {
    return (
        <div>
            <div className="hero pt-10">
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="mb-5 text-2xl md:text-5xl font-bold">{title}</h1>
                        <p className="py-6 w-8/12 mx-auto">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SharedTitle;