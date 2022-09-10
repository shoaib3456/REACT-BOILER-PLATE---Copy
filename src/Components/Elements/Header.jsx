import { MdOutlineLocationOn } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Navbar, Container } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <>
      <div className='header'>
        <Container fluid>
          <Navbar id="mynav" className="navbar" expand="lg">
            <Navbar.Brand className="navbar-brand page-scroll animation animated fadeInDown"><img src="/images/logo.png" alt="" className='logo-nav' /></Navbar.Brand>
            <div >
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1.1s" style={{ animationDelay: '1.1s', opacity: 1 }}>
                <div>
                  <GiHamburgerMenu className="text-orange" />
                </div>
              </Navbar.Toggle>
            </div>

            <Navbar.Collapse className="navbar-collapse collapse " id="navbarSupportedContent" >
              <ul className="navbar-nav ms-lg-5">
                <div class="dropdown mx-auto">
                  <button class="btn bg-none dropdown-btn d-flex gap-4 align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className='p-0'>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Meet The mechanics</span>
                    </li>

                  </ul>
                </div>
                <div class="dropdown  mx-auto">
                  <button class="btn bg-none dropdown-btn d-flex gap-4 align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className='p-0'>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Mot Your Car</span>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Service Your Car</span>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Wheel aligment</span>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Wheel balancing</span>

                    </li>

                  </ul>
                </div>
                {/* <li className="animation animated fadeInDown" data-animation="fadeInDown" data-animation-delay="1s" >
                  <a className="nav-link " href="/">About</a>
                </li> */}

                {/* <li className='mx-2'><a className="nav-link page-scroll nav_item" href="#roadmap">Services</a></li> */}
                <li className='mx-lg-2  mx-auto'><a className="nav-link page-scroll nav_item" href="#plans">Blog</a></li>
                <li className='mx-lg-2  mx-auto'><a className="nav-link page-scroll nav_item" to="#Review">Reveiws</a></li>
                <div class="dropdown mx-auto">
                  <button class="btn bg-none dropdown-btn d-flex gap-4 align-items-center dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Contact
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className='p-0'>
                      <span className='px-1 bg-none d-flex text-white gap-3'>Contact now</span>
                    </li>

                  </ul>
                </div>
                {/* <li className='mx-lg-2  mx-auto'><a className="nav-link page-scroll nav_item" href="#contact">Contact</a></li> */}
              </ul>
              <ul className="navbar-nav ms-auto nav_btn align-items-center">
                <li className=' d-flex justify-content-end d-lg-flex d-none '>
                  <img src="/images/google-img.jpg" className='google-img' alt="" />
                </li>
                <li className='mx-3'>

                  <div className='d-flex flex-lg-column flex-row gap-3 p-3 align-items-center'>
                    <div className='icon-div '>
                      <MdOutlineLocationOn className='text-orange fs-3' />
                    </div>
                    <div className='icon-div mt-1 '>
                      <MdCall className='text-orange fs-3' />
                    </div>
                  </div>
                </li>

                <li className=''>
                  <button className='btn-global '
                  >
                    BOOK ONLINE
                  </button>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </Container >
      </div>
    </>
  )
}

export default Header