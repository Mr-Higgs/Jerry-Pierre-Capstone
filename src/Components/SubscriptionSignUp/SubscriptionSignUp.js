import React from 'react'

function SubscriptionSignUp() {
  return (
    <div>
        <div className="container ">
            <section className="row text-center  mb-5">
                <div className="col-md-6 m-auto">
                    <h1><i className="fas fa-newspaper fa-2x"></i></h1>
                    <h1 className="display-4">Newsletter Signup</h1>
                    <p className="lead">
                    Enter your info to get our awesome monthly newsletter
                    </p>
                    <form action="/about" method="POST">
                        <div className="form-group m-2">
                            <input type="text" name="firstName" id="first-name" className="form-control" placeholder="First Name"
                            required />
                        </div>
                        <div className="form-group m-2">
                            <input type="text" name="lastName" id="last-name" className="form-control" placeholder="Last Name" required />
                        </div>
                        <div className="form-group m-2">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email" required />
                        </div>
                        <button type="submit" className="btn btn-success mb-2 btn-block">
                            Sign Up
                        </button>
                    </form>
                </div>
            </section>
        </div>
    </div>
  )
}

export default SubscriptionSignUp