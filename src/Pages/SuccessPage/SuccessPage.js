import React from 'react'

function SuccessPage() {
  return (
    <div>
        <div className="container">
            <section className="row mt-5 text-center">
                <div className="col-md-6 m-auto">
                <h1><i className="fas fa-thumbs-up fa-2x"></i></h1>
                <h1 className="display-4">Welcome to the Community!</h1>
                <p className="lead">
                    You are now signed up to recieve our latest updates!
                </p>
                <a className="btn btn-success" href="/about">Back</a>
                </div>
            </section>
        </div>
    </div>
  )
}

export default SuccessPage