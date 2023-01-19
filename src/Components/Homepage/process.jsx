import React from 'react'

const Process = () => {
    return (
        <section id="process" className="dtr-section dtr-py-100 bg-white">
            <div className="container">
                {/* heading starts */}
                <div className="dtr-section-intro text-left dtr-mb-50">
                    <div className="dtr-intro-subheading-wrapper">
                        <p className="dtr-intro-subheading">The Process</p>
                    </div>
                    <h2 className="dtr-intro-heading">Experience the better</h2>
                    <p className="dtr-intro-content">
                        There are many variations of passages of lorem ipsum available
                        <br />
                        but the majority have suffered alteration in some form by
                        <br />
                        injected humour or randomised words.
                    </p>
                </div>
                {/* heading ends */}
                {/*== row starts ==*/}
                <div className="row">
                    {/* process bar starts */}
                    <div className="dtr-process-bar-center dtr-mb-100 dtr-pt-30 color-dark">
                        <div className="dtr-process-bar dtr-shadow">
                            <ul className="dtr-process-list">
                                <li> Onboard </li>
                                <li> Collaborate </li>
                                <li> Automate </li>
                            </ul>
                        </div>
                    </div>
                    {/* process bar ends */}
                    {/* column 1 starts */}
                    <div className="col-12 col-md-4">
                        <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                            <div className="dtr-feature-icon bg-orange">
                                {" "}
                                <i className="icon-user-plus" aria-hidden="true" />{" "}
                            </div>
                            <div className="dtr-feature-content">
                                <h4 className="dtr-feature-heading">Onboard</h4>
                            </div>
                        </div>
                        <p className="dtr-pt-20">
                            There are many variations of passages of lorem ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                    {/* column 1 ends */}
                    {/* column 2 starts */}
                    <div className="col-12 col-md-4 small-device-space">
                        <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                            <div className="dtr-feature-icon bg-cyan">
                                {" "}
                                <i className="icon-intersect" aria-hidden="true" />{" "}
                            </div>
                            <div className="dtr-feature-content">
                                <h4 className="dtr-feature-heading">Collaborate</h4>
                            </div>
                        </div>
                        <p className="dtr-pt-20">
                            There are many variations of passages of lorem ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                    {/* column 2 ends */}
                    {/* column 3 starts */}
                    <div className="col-12 col-md-4">
                        <div className="dtr-feature dtr-feature-top dtr-feature-circle dtr-feature-large text-left ">
                            <div className="dtr-feature-icon bg-sky-blue">
                                {" "}
                                <i className="icon-timer-fill" aria-hidden="true" />{" "}
                            </div>
                            <div className="dtr-feature-content">
                                <h4 className="dtr-feature-heading">Automate</h4>
                            </div>
                        </div>
                        <p className="dtr-pt-20">
                            There are many variations of passages of lorem ipsum available
                            but the majority have suffered alteration in some form.
                        </p>
                    </div>
                    {/* column 3 ends */}
                </div>
                {/*== row ends ==*/}
            </div>
        </section>
    )
}

export default Process
