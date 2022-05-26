import React from 'react'

function FailurePage() {
  return (
    <div>
        <div className="container">
            <section className="row mt-5 text-center">
                <div className="col-md-6 m-auto">
                <h1><i className="fas fa-times-octagon fa-2x"></i></h1>
                <h1 className="display-4">Whoops!</h1>
                <p className="lead">
                    Something went wrong, please go back and make sure all fields are
                    filled in correctly
                </p>
                <a className="btn btn-success" href="/about">Back</a>
                </div>
            </section>
        </div>
    </div>
  )
}



export default FailurePage