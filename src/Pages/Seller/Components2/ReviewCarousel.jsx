import Title from "../../../Components/Title";


const ReviewCarousel = () => {
    return (
        <div className="container mx-auto">
            <Title title1={''} title2={'Customer Review'}></Title>
            <div className="carousel  w-full my-10">
                <div id="slide1" className="carousel-item relative w-full h-max ">
                    <div className="grid grid-cols-4 gap-5 px-12">
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body ">
                                <h2 className="card-title">Card title13</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title14</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title15</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title16</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-max">
                    <div className="grid grid-cols-4 gap-5 px-12">
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body ">
                                <h2 className="card-title">Card title9</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title10</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title11</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title12</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-max">
                    <div className="grid grid-cols-4 gap-5 px-12">
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body ">
                                <h2 className="card-title">Card title 1</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title2</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title 3</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title4</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-max">
                    <div className="grid grid-cols-4 gap-5 px-12">
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body ">
                                <h2 className="card-title">Card title 5</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title 6</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title 7</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                        <div className="card bg-neutral text-neutral-content">
                            <div className="card-body">
                                <h2 className="card-title">Card title 8</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;