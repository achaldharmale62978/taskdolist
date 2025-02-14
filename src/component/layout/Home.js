import { NavLink } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import '../layout/css_files/home.css'
import { FaPlayCircle } from 'react-icons/fa'
import goggle from '../../assects/google-removebg-preview.png'
import facebook from '../../assects/facebook-removebg-preview.png'
import youtube from '../../assects/youtube-removebg-preview.png'
import { FaMinus } from "react-icons/fa";
import { PiCardsBold } from "react-icons/pi";
import { PiCardsThreeFill } from "react-icons/pi";
import { PiChalkboard } from "react-icons/pi";
import { GiSecretBook } from "react-icons/gi";
import girl from '../../assects/girl.jpeg'
import img3 from '../../assects/mbbb.jpeg'
import logolast from '../../assects/logo1.jpeg'
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";

function Home() {

    const [user, setuser] = useState([])
    const { register, handleSubmit } = useForm()

    function saveData(data) {
        axios.post('http://localhost:6001/home', data)
        console.log(data)
    }

    async function fetchdata() {
        const result = await
            axios.get('http://localhost:6001/home')
        console.log(result.data)
        setuser(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <div>
                <Navbar />
                <div className="m-2">
                    <div className="back1 ">
                        <h2 className="">
                            Simplify Your Life with Our <br /> Todo App
                        </h2>
                        <div>
                            <p className='fontsize'>
                                Stay organized and boost your productivity with our intuitive todo website. <br />
                                Experience a modern approach to task management that fits your lifestyle.
                            </p>

                            <div className='mt-5'>

                                {/* <button type="button" className="btn btn-outline-danger  col-md-2 my-2 my-md-00 " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ fontSize: '20px' }}> Get Started </button> */}
                                <div class="modal fade text-start" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Get Started Today! <br />
                                                    Fill in your details and take control of your tasks.
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body ">
                                                <form onSubmit={handleSubmit(saveData)}>
                                                    <div className='row inp'>
                                                        <div className='form-group textal col-12 col-md-6'>
                                                            <label htmlFor='fname' className='form-label' style={{ fontSize: '18px' }}>First Name :</label>
                                                            <input id='fname' type='text' className='form-control checkbox' placeholder="First Name" {...register('fname')} />
                                                        </div>
                                                        <div className='form-group textal col-12 col-md-6'>
                                                            <label htmlFor='lname' className='form-label' style={{ fontSize: '18px' }}>Last Name :</label>
                                                            <input id='lname' type='text' className='form-control checkbox' placeholder="Last Name" {...register('lname')} />
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className='row inp'>
                                                        <div className='form-group textal col-12 col-md-8'>
                                                            <label className='form-label' style={{ fontSize: '18px' }}>Gender :</label>
                                                            <div className='form-check form-check-inline'>
                                                                <input id='female' type='radio' name='gender' value='female' className='form-check-input checkbox' {...register('gender')} />
                                                                <label htmlFor='female' className='form-check-label ' style={{ fontSize: '18px' }}>Female</label>
                                                            </div>
                                                            <div className='form-check form-check-inline'>
                                                                <input id='male' type='radio' name='gender' value='male' className='form-check-input checkbox' {...register('gender')} />
                                                                <label htmlFor='male' className='form-check-label' style={{ fontSize: '18px' }}>Male</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="form-check">
                                                        <div>
                                                            <input class="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" {...register('language')} />
                                                            <input class="form-check-label checkbox" for="flexCheckDefault" placeholder="English" />
                                                        </div><br />
                                                        <div>
                                                            <input class="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" {...register('language')} />
                                                            <input class="form-check-label checkbox" for="flexCheckDefault" placeholder="Hindi" />
                                                        </div><br />
                                                        <div>
                                                            <input class="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" {...register('language')} />
                                                            <input class="form-check-label checkbox" for="flexCheckDefault" placeholder="Marathi" />
                                                        </div>

                                                    </div>

                                                    <div className='form-group textal col-12 col-md-8'>
                                                        <label htmlFor='email' className='form-label' style={{ fontSize: '18px' }}>Email Address:</label>
                                                        <input id='email' type='email' className='form-control checkbox' placeholder='Enter your email address' {...register('email')} />
                                                    </div><br />

                                                    <div className="form-group">
                                                        <input className="form-check-input checkbox" type="checkbox" id="terms" />&ensp;
                                                        <label htmlFor="terms" className="form-check-label" style={{ fontSize: '18px' }}> I agree to the <a href="#">Terms and conditions</a></label>
                                                    </div>
                                                </form>
                                            </div>
                                            {/* Done button 1 */}
                                            <div class="modal-footer">
                                                <button class="btn btn-outline-danger" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" style={{ fontSize: '20px' }}>done</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade " id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered ">
                                        <div class="modal-content ">
                                            
                                            <div class="modal-body ">
                                                <div class="d-flex" style={{ width: " 18rem;" }}>
                                                    <div class="card-body ">
                                                        <h5 class="card-title" style={{ fontSize: '50px' }}><FcLike /></h5>
                                                        <h3 class="card-subtitle mb-2 ">Thank you for connect with us.</h3>
                                                        <p class="card-text">Our team will conacting with you soon</p>

                                                    </div>
                                                    <div class="modal-">
                                                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel2"></h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                                {/* Done button 2 */}
                                                <div class="modal- m-3">
                                                    <button class="btn btn-outline-danger" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" style={{ fontSize: '20px' }}>Done</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* done 3 */}
                                <div class="modal fade " id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content ">

                                            <div class="modal-body ">
                                                <div class="d-flex" style={{ width: " 18rem;" }}>
                                                    <div class="card-body ">
                                                       
                                                        <table class="table">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Id</th>
                                                                    <th scope="col">First Name</th>
                                                                    <th scope="col">Last Name</th>
                                                                    <th scope="col">Gender</th>
                                                                    <th scope="col">Language</th>
                                                                    <th scope="col">Email</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    user.map(use => {
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row">{use.id}</th>
                                                                                <td>{use.fname}</td>
                                                                                <td>{use.lname}</td>
                                                                                <td>{use.gender}</td>
                                                                                <td>{use.language}</td>
                                                                                <td>{use.email}</td>
                                                                                <td>
                                                                                    <NavLink to={`/reupdate/${use.id}`} className='btt btn btn-link p-0'>update</NavLink>
                                                                                </td>
                                                                                <td className='table-secondary'>
                                                                                    <NavLink to={`/redelete/${use.id}`} className='btt btn btn-link p-0'>delete</NavLink>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table>

                                                    </div>
                                                    <div class="modal-">
                                                        <h1 class="modal-title fs-5" id="exampleModalToggleLabel3"></h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                </div>
                                                {/* Done button 4 */}
                                                <div class="modal- m-3">
                                                    <button class="btn btn-outline-danger" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" style={{ fontSize: '20px' }}>Done</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <a class="btn btn-outline-danger  col-md-2 my-2 my-md-00" data-bs-toggle="modal" href="#exampleModalToggle" role="button" style={{ fontSize: '20px' }}> Get Started</a>


                                <NavLink>
                                    <button type="submit" className="btn btn-outline-danger  col-md-2 my-2 my-md-00 ms-1 " style={{ fontSize: '20px' }}> Learn More </button>
                                </NavLink>

                            </div>
                        </div>

                        <div class="row   mt-5">
                            <div class="col-sm-6   ">
                                <div class="card ms-5 text-start card1 " >
                                    <div class="card-body ">
                                        <h1 class="card-title  ">
                                            Organize.<br />
                                            Achieve.<br />
                                            Relax.
                                        </h1><br />
                                        <p class="card-text fontsize">Turn clutter into clarity, chaos into control, <br /> and dreams into done.bold visions into market success</p>

                                        <br /><br />
                                        <NavLink>
                                            <button type="submit" className="btn btn-outline-light ">Get Started Today</button>
                                        </NavLink>&ensp;&ensp;
                                        <NavLink>
                                            <button type="submit" className="btn btn-outline-light "> Discover Features</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>&ensp;
                            <div class="col-sm-4">
                                <div class="card text-start card1_2">
                                    <div class="card-body boyi">
                                        <h2 class="card-title  ">
                                            Your Tasks.<br />
                                            Your Tools.
                                        </h2>
                                        <div id="carouselExampleControls " class="carousel slide mt-5" data-bs-ride="carousel">
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden" >Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="d-flex  col-12">
                                        <p class="card-text position-absolute bottom-0 mb-5 ms-3 fontsize">Freddie Halvorson<br />
                                            Chief Productivity Enthusiast   &ensp;&ensp;
                                            <a href="/" class="position-absolute bottom-0 cardimg1 "> <FaPlayCircle /></a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center flex-wrap">
                                <div className="m-3"><img src={goggle} alt="Company Logo" className="img-fluid" height='100px' width='100px' /></div>
                                <div className="m-3"><img src={facebook} alt="Company Logo" className="img-fluid" height='200px' width='100px' /></div>
                                <div className="m-3"><img src={youtube} alt="Company Logo" className="img-fluid" height='200px' width='100px' /></div>
                            </div>
                        </div>
                    </div>

                    <div className="ms-3 mt-5  ">
                        <h2>Transform Your Productivity with Our <br /> Innovative To-Do List Features</h2>

                        <div class="row row-cols-1 row-cols-md-4 g-4 text-start col-sm-10 ms-5">
                            <div class="col  ">
                                <div class="card">
                                    {/* <img src="..." class="card-img-top" alt="..."/> */}
                                    <h1 className="ms-3" style={{ color: 'red' }}><PiCardsBold /></h1>
                                    <div class="card-body">
                                        <h3 class="card-title">User-Friendly <br /> Interface
                                            <p style={{ fontSize: '40px', color: 'red' }}><FaMinus /> <span style={{ fontSize: '40px', color: 'red' }}><FaMinus /></span> </p></h3>
                                        <p class="card-text">Our platform offers seamless <br /> task management to<br /> boost your efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <h1 className="ms-3" style={{ color: 'red' }}><PiCardsThreeFill /></h1>
                                    <div class="card-body">
                                        <h3 class="card-title">Collaborate & Share <br /> Effortlessly
                                            <p style={{ fontSize: '40px', color: 'red' }}><FaMinus /> <span style={{ fontSize: '40px', color: 'red' }}><FaMinus /></span> </p></h3>
                                        <p class="card-text fontsize">Invite team members to <br /> work together and achieve <br /> your goals faster.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <h1 className="ms-3" style={{ color: 'red' }}><PiChalkboard /></h1>
                                    <div class="card-body">
                                        <h3 class="card-title">Effortless <br /> Collaboration
                                            <p style={{ fontSize: '40px', color: 'red' }}><FaMinus /> <span style={{ fontSize: '40px', color: 'red' }}><FaMinus /></span> </p></h3>
                                        <p class="card-text fontsize">Invite team members to <br /> work together and achieve  <br /> your goals faster.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <h1 className="ms-3" style={{ color: 'red' }}><GiSecretBook /></h1>
                                    <div class="card-body">
                                        <h3 class="card-title">Seamless <br /> Access
                                            <p style={{ fontSize: '40px', color: 'red' }}><FaMinus /> <span style={{ fontSize: '40px', color: 'red' }}><FaMinus /></span> </p></h3>
                                        <p class="card-text fontsize">Stay connected and manage <br /> your tasks on the <br /> go with ease.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card2 mt-5">
                        <div className="text-start ">
                            <h2 >Customer Testimonials</h2>
                            <p className='fontsize'>This tool has transformed my productivity and organization!</p>
                        </div>
                        <div className="col-12 mt-5 ">
                            <div className=" m-3">
                                <div class="row row-cols-1 row-cols-md-3 g-4 ">
                                    <div class="col">
                                        <div class="card2_1 h-100">
                                            <div class="card-body">
                                                <h5 class="card-title text-end fontsize">Using this website has made my <br /> tasks so much easier! I can't <br /> imagine my day without it."</h5>
                                                &ensp;
                                                <p class="card-text text-start ms-3 fontsize">Sherri Cronin<br />
                                                    Project Manager, TechCorp</p>
                                            </div>&ensp;
                                            <div class=" ms-5 ">
                                                <nav aria-label="Page navigation example">
                                                    <ul class="pagination">
                                                        <li class="page-item">
                                                            <a class="page-link pbu" href="#" aria-label="Previous " style={{ color: 'red', fontSize: '25px' }}>
                                                                <span aria-hidden="true" >&laquo;</span>
                                                            </a>
                                                        </li>&ensp;
                                                        <li class="page-item ">
                                                            <a class="page-link pbu" href="#" aria-label="Next" style={{ color: 'red', fontSize: '25px' }}>
                                                                <span aria-hidden="true" >&raquo;</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col "  >
                                        <div class=" col-9 img2_1" >
                                            <img src={girl} class="card-img-top" alt="..." />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class=' 3 col-12  mt-5 d-flex'>
                        <div class="col-5 ms-5" style={{}}>
                            <img src={img3} class="card-img-top" alt="..." />
                        </div>
                        <div class=" col-5" style={{}}>
                            <div class="card-body mt-5 card3_2 text-end">
                                <h2 class="card-title"> Start Organizing Your Life Today</h2><br />
                                <h6 class="card-subtitle mb-2 text-muted fontsize">Join us now and transform your productivity with our intuitive to-do list platform!</h6><br />
                                <a href="#" class="btn btn-danger ">Sign Up</a>&ensp;
                                <a href="#" class="btn btn-danger">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className='hh13 fontfamily mt-5' style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className='col-lg-3 col-md-6 col-sm-12 mb-4' style={{ textAlign: 'left' }}>
                            <img src={logolast} height='80' width='250' alt='Logo' /><br /><br />
                            <div className='fontsize'>
                                Subscribe to our newsletter for the latest features and updates delivered to you.
                                <div>
                                    {/* <div className='input-group col-1'>
                                        <input id='email' className='form-control' type='text' placeholder='Your email here' aria-describedby='button-addon2' />
                                    </div><br /> */}
                                    <div>
                                        <button class="btn btn-outline-danger" type="button" id="button-addon2">Button</button>
                                    </div>
                                </div>
                                By subscribing, you consent to our Privacy Policy and agree to receive updates.

                            </div>
                        </div>

                        <div className='offset-lg-1 col-lg-7 col-md-6 col-sm-12 fontsize endp'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
                                    <div>
                                        <b>Useful Links</b>
                                    </div>
                                    <div>
                                        <a href='' className='atag'>Home Page</a> <br />
                                        <a href='' className='atag'>About Us</a> <br />
                                        <a href='' className='atag'>Contact Us</a> <br />
                                        <a href='' className='atag'>Blog Posts</a> <br />
                                        <a href='' className='atag'>FAQs</a> <br />

                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
                                    <div>
                                        <b>Resources</b>
                                    </div>
                                    <div>
                                        <a href='' className='atag'>Help Center</a> <br />
                                        <a href='' className='atag'>User Guide</a> <br />
                                        <a href='' className='atag'>Community Forum</a> <br />
                                        <a href='' className='atag'>Feedback</a> <br />
                                        <a href='' className='atag'>Support</a>

                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-3 col-sm-3 mb-4'>
                                    <div>
                                        <b >Solutions</b>
                                    </div>
                                    <div>
                                        <a href='' className='atag'>Facebook</a> <br />
                                        <a href='' className='atag'>Instagram</a> <br />
                                        <a href='' className='atag'>X</a> <br />
                                        <a href='' className='atag'>Linkedin</a> <br />
                                        <a href='' className='atag'>YouTube</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex '>
                        <p className='text-start'>
                            © 2024 Osumare. All rights reserved.
                        </p>
                        <div className='text-end d-flex ms-5 '>
                            <p className='text-end'>
                                <u>Privacy Policy</u>&ensp;

                                <u>Terms of Service</u>&ensp;

                                <u>Cookie Settings</u>&ensp;
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home;