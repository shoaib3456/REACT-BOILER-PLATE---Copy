import React from 'react'

const ServiceCard = () => {
  return (

      <>
       <div className="services-card position-r ">
              <img src="/images/services-01.jpg" className="w-100 " alt="" />
              <div className="bottom-name">
                <h1 className="fs-4">MOT YOUR CAR</h1>

              </div>
              <div className="card-inner-content ">
                <h1 className="fs-4 text-light">MOT YOUR CAR</h1>
                <span className="orange-line mt-lg-3 mt-1"></span>
                <div className="text-center">
                  <p className="mt-4 text-light ">
                    Most people don’t give car maintenance a lot of thought, but <br /> regular servicing saves you money by reducing fuel costs and <br /> prolongs the life of your engine.

                  </p>
                  <button className='btn-global mt-1 mb-2'
                  >
                    FIND OUT MORE
                  </button>
                </div>
              </div>
            </div>
      </>

  )
}

export default ServiceCard
