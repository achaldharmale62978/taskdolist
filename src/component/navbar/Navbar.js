import logo from '../../assects/logo1.jpeg'

function Navbar() {
    return (
        <>
            <div className='m-2'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={logo} height='25' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ fontSize: "19px", fontFamily: "serif" }}>
                                <li className="nav-item ">
                                    <a className="nav-link active" href="/aboutus">AboutUs</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Features</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="/">MoreOptions</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active" href="/">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link active btn btn-outline-danger " aria-current="page" href="/login" style={{ color: "white" }}>Log IN</a>
                                </li>

                                &ensp;&ensp;

                                <li className="nav-item">
                                    <a className="nav-link active btn btn-outline-danger " aria-current="page" href="/signin" style={{ color: "white" }}>Sign IN</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar