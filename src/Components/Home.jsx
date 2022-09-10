import React from 'react'
import Header from "./Elements/Header"
import ServiceCard from "./Elements/ServiceCard"

import { MdOutlineLocationOn } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { BsFacebook } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';

export default function Home() {
    return (
        <>
            {/* Banner */}
            <div className="bannner">
                <div className="row mx-0">
                    <div className="col-12 ">
                        <div className="text-center">
                            <h2 className="text-light fw-bold">Queens Park Garage Bournemouth </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-4 px-lg-0 px-3 text-center">
                <div className="d-flex justify-content-center align-items-center flex-column" >
                    <h1 className="text-gray">Your local, independent garage</h1>
                    <p className="mb-0 fs-3 fw-bold mt-3">Queens Park Garage has some of the best facilities in Bournemouth</p>
                    <div className="text-center mt-3 " >
                        <p className="fs-6 fw-500 text-secondary">
                            We are one of the leading independent garages in Dorset and Hampshire. With state of the art <br /> facilities and fully qualified mechanics you can be confident your car will be handled with the  <br /> utmost care.
                        </p>
                        <p className="fw-500 text-secondary">Please note that from 23rd May 2022 Queens Park Garage will operate as a cashless business.</p>

                        <button className='btn-global mt-3'
                        >
                            BOOK ONLINE
                        </button>
                    </div>
                </div>
            </div>


            {/* services */}
            <div className="services">
                <div className="d-flex justify-content-center pt-4 align-items-center flex-column ">
                    <div className="text-center">
                        <h1 className="fs-4 text-gray fw-700">OUR SERVICES</h1>
                    </div>
                    {/* <span className="orange-line w-25 mt-3"></span> */}
                </div>
                <div className="row mx-0">

                    <div className="col-lg-6 col-12  mt-3">
                        <ServiceCard />
                    </div>
                    <div className="col-lg-6 col-12  mt-3">
                        <ServiceCard />
                    </div>
                </div>
                <div className="row mx-0">

                    <div className="col-lg-6 col-12  mt-5">
                        <ServiceCard />
                    </div>
                    <div className="col-lg-6 col-12  mt-5">
                        <ServiceCard />
                    </div>
                </div>
            </div>
            {/* video div */}

            <section className="video-div mt-5 position-r " >
                <div className="iframe-video">
                    <iframe width={"100%"} height={"100%"} src="https://www.youtube.com/embed/fMVtVqmJYhQ" title="Queens Park Garage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </section>
            <section className="testimonial">
                <div className="mt-5 text-center">
                    <p className="fs-3 fw-700 text-gray">Testimonials</p>
                    <p className="mb-0 fs-8 fw-600 mt-3">View below some reviews from some of our very happy customers.</p>
                </div>
                <div className="d-flex justify-content-center px-lg-0 px-3 flex-wrap align-items-center gap-3 mt-4" >
                    <div className="card-testimonial col-lg-3 col-12 mx-lg-0  " >
                        <div className="px-3 pt-3">
                            <img src="/images/coma.png" alt="" />
                        </div>
                        <div className="mt-3 px-3 pt-2">
                            <p className="text-light fw-500">
                                I really appreciate Queens Park Garage! I had came to Bournemouth for the first time and had had a little bump on the way but as I entered their garage I was treated with so much care, they fixed the damages on my care within 5 minutes and didn't even charge me a bit, they are warm hearted friendly people.
                            </p>
                            <img src="/images/stars.svg" alt="" />
                        </div>
                        <div className="date-sec px-3 py-3 mt-3">
                            <p className="text-light mb-0 fs-4 fw-600">Dinesh 15/08/2022</p>
                        </div>
                    </div>
                    <div className="card-testimonial-gary col-lg-3  col-12" >
                        <div className="px-3 pt-3">
                            <img src="/images/coma.png" alt="" />
                        </div>
                        <div className="mt-3 px-3 pt-2">
                            <p className="text-light fw-500">
                                Once again such wonderful service from Paul and the staff at Queens Park Garage. I cannot recommend them highly enough and Paul will endeavour to go far and beyond for great customer satisfaction and once again, I would like to say thank you to all the team there for honest, excellent and customer focused service at all times. Amazing team!!! Never will I go anywhere else! Thank you all! Matt Harrison
                            </p>
                            <img src="/images/stars.svg" alt="" />
                        </div>
                        <div className="date-sec px-3 py-3 mt-3">
                            <p className="text-light mb-0 fs-4 fw-600">Dinesh 15/08/2022</p>
                        </div>
                    </div>
                    <div className="card-testimonial col-lg-3 col-12" >
                        <div className="px-3 pt-3">
                            <img src="/images/coma.png" alt="" />
                        </div>
                        <div className="mt-3 px-3 pt-2">
                            <p className="text-light fw-500">
                                I really appreciate Queens Park Garage! I had came to Bournemouth for the first time and had had a little bump on the way but as I entered their garage I was treated with so much care, they fixed the damages on my care within 5 minutes and didn't even charge me a bit, they are warm hearted friendly people.
                            </p>
                            <img src="/images/stars.svg" alt="" />
                        </div>
                        <div className="date-sec px-3 py-3 mt-3">
                            <p className="text-light mb-0 fs-4 fw-600">Dinesh 15/08/2022</p>
                        </div>
                    </div>


                </div>
                <div className="text-center mt-4">
                    <button className='btn-global mt-3'
                    >
                        TESTIMONIALS
                    </button>
                </div>
            </section>
            <section className="mt-4 Customers p-4">
                <div className="d-flex justify-content-center align-items-center flex-column ">
                    <div className="text-center">
                        <h1 className="fs-4 text-light fw-700">Why our customers think we’re the best</h1>
                    </div>
                    <span className="orange-line w-25 mt-3"></span>
                </div>
                <div className="d-flex flex-wrap justify-content-between mt-5 ">
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-01.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                Family Run <br /> Business
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-02.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                Fully Trained  &  <br /> Qualified Technicians
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-03.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                Free Wifi & <br /> Refreshments
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-04.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                State of the Art <br /> Tools & Equipment
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-05.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                Customer Courtesy <br /> Cars Available
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-06.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                Out of hours <br /> key drop
                            </h6>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 flex-column">
                        <img src="/images/cus-07.png" alt="" />
                        <div className="text-center">
                            <h6 className="text-light">
                                On-site Parking
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className='btn-global mt-3'
                    >
                        FIND OUT MORE
                    </button>
                </div>
            </section>
            <section className="blogs p-4">
                <div className="d-flex mt-4 justify-content-center align-items-center flex-column ">
                    <h1 className="fs-4 text-gray">Queens Park Garage Blog & News</h1>
                    <span className="orange-line w-25 mt-3"></span>
                </div>
                <div className="row mt-5 mx-0">
                    <div className="col-lg-4 mt-3 text-lg-start text-center col-12">
                        <p className="text-dark fw-600 mb-4">Brake, rattle and roll - common faults and when to call us!</p>
                        <p className="text-dark fw-400 mb-4">It’s time to delve a little deeper into brakes and what their common faults are.</p>
                        <p className="text-dark fw-400 mb-4">Looking back on our last blog, we went through the main components and how they work. I’ll be explaining a few common problems and how/why they happen and most importantly what you can do to prevent these problems from happening!</p>
                        <button className='btn-global mt-3'
                        >
                            FIND OUT MORE
                        </button>
                    </div>
                    <div className="col-lg-4 mt-3 text-lg-start text-center col-12">
                        <p className="text-dark fw-600 mb-4">Brake, rattle and roll - common faults and when to call us!</p>
                        <p className="text-dark fw-400 mb-4">It’s time to delve a little deeper into brakes and what their common faults are.</p>
                        <p className="text-dark fw-400 mb-4">Looking back on our last blog, we went through the main components and how they work. I’ll be explaining a few common problems and how/why they happen and most importantly what you can do to prevent these problems from happening!</p>
                        <button className='btn-global mt-3'
                        >
                            FIND OUT MORE
                        </button>
                    </div>
                    <div className="col-lg-4 mt-3 text-lg-start text-center col-12">
                        <p className="text-dark fw-600 mb-4">Brake, rattle and roll - common faults and when to call us!</p>
                        <p className="text-dark fw-400 mb-4">It’s time to delve a little deeper into brakes and what their common faults are.</p>
                        <p className="text-dark fw-400 mb-4">Looking back on our last blog, we went through the main components and how they work. I’ll be explaining a few common problems and how/why they happen and most importantly what you can do to prevent these problems from happening!</p>
                        <button className='btn-global mt-3'
                        >
                            FIND OUT MORE
                        </button>
                    </div>

                </div>

            </section>
            <section className="Meet">
                <div className="row mx-0 align-items-center">
                    <div className="col-lg-4 col-12 px-5 py-3 text-lg-start text-center">
                        <h1 className="fs-4 text-gray">Meet the Mechanics</h1>
                        <p className="fw-400">
                            Get to know the team of highly skilled technicians who will be looking after your vehicle.
                        </p>
                        <button className='btn-global mt-3'
                        >
                            FIND OUT MORE
                        </button>
                    </div>
                    <div className="col-lg-8 col-12 " >
                        <div className="p-5">

                            <img src="images/group-img.jpg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="sky-pallerx">
                <div className="row mx-0 align-items-center">
                    <div className="col-lg-6 text-center col-12 mt-lg-0 mt-4">
                        <h1 className="fs-4 text-dark fw-600">Relax whilst we work on your car</h1>
                        <div className="d-flex justify-content-center">
                            <span className="orange-line mt-3"></span>
                        </div>
                        <div className="text-center">
                            <p className="mt-4 fw-400 text-dark ">
                                You can leave your car with us or wait in our comfortable <br /> reception with free wi-fi, free refreshments as well as viewing <br /> panel and CCTV so you can watch us while we work on your car.


                            </p>
                            <p className="mt-4 fw-400 text-dark ">
                                Please see our <span className="text-orange fw-400">Visitors</span> page for safety guidance.

                            </p>
                            <button className='btn-global mb-3 mt-3'
                            >
                                BOOK ME IN!
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 d-lg-block d-none col-12 text-center">
                        <img src="images/banner.png" alt="" />
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="container">
                    <div className="row mx-0 ">
                        <div className="col-lg-3 col-12  p-3">
                            <p className="fs-5 fw-600 text-gray">Opening Times</p>
                            <div>
                                <span className="orange-line w-100 mt-3"></span>
                                <div class="mt-3 ">
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   " >Monday</span>
                                        <p className="fw-600 "> 08:00- 18:00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Tuesday</span>
                                        <p className="fw-600 "> 08:00- 18:00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Wednesday</span>
                                        <p className="fw-600 " > 08:00- 18:00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Thursday</span>
                                        <p className="fw-600 "> 08:00- 18:00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Friday</span>
                                        <p className="fw-600 "> 08:00- 18:00</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Saturday</span>
                                        <p className="fw-600 "> 08:30- 14:30</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Sunday</span>
                                        <p className="fw-600 "> Closed</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="fw-600   ">Bank Holidays</span>
                                        <p className="fw-600 "> Closed</p>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-3 col-12  p-3">
                            <p className="fs-5 fw-600 text-gray">Contact Details</p>
                            <div>
                                <span className="orange-line w-100 mt-3"></span>

                                <div class="d-flex gap-2 mt-3">
                                    <MdCall className='text-orange fs-3' />
                                    <div>
                                        <span className="fw-600">
                                            01202 216104
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 mt-3">
                                    <BsFillEnvelopeFill className='text-orange fs-3' />
                                    <div>
                                        <span className="fw-600">
                                            info@queensparkgarage.co.uk
                                        </span>
                                    </div>
                                </div>
                                <div class="d-flex gap-2 mt-3">
                                    <MdOutlineLocationOn className='text-orange fs-3' />
                                    <div>
                                        <span className="fw-600">Queens Park Garage<br />
                                            152-156 Ashley Road<br />
                                            Bournemouth<br />
                                            Dorset<br />
                                            BH1 4NF</span>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-12 p-3 col-lg-6 my-3">
                            <img src="images/proud-members.jpg" className="img-fluid" alt="" />
                            <div className="row mx-0 align-items-center">
                                <div className="col-6 text-center">
                                    <img src="images/proud-members-02.jpg" className="img-fluid" alt="" />

                                </div>
                                <div className="col-6 text-center">
                                    <img src="images/proud-members-03.jpg" className="img-fluid" alt="" />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <section className="footer-dark" >
                <div className="p-lg-0 p-3 text-center">

                    <div className="d-lg-flex d-block gap-3  justify-content-center footer-links align-items-center">
                        <p><a href="#">Mot Your Car</a></p>
                        <p><a href="#">Service Your Car </a></p>
                        <p><a href="#">Wheel aligment</a></p>
                        <p><a href="#">Wheel balancing</a></p>



                    </div>
                    <div className="d-flex justify-content-center footer-links align-items-center">
                        <p><a href="#">privicy policy</a></p>
                        <p><a href="#">blog</a></p>
                    </div>
                    <div className="d-flex  justify-content-center gap-3 mb-3">
                        <div className="icon-round">
                            <BsFacebook />
                        </div>
                        <div className="icon-round">
                            <AiOutlineTwitter />
                        </div>
                        <div className="icon-round">
                            <AiOutlineInstagram />
                        </div>
                        <div className="icon-round">
                            <AiFillYoutube />
                        </div>
                    </div>
                    <p className="fw-600 text-light" >Copyright 2022 Queens Park Garage. Website by Blue Bee. Site Map.</p>

                </div>
            </section>
        </>
    )
}
