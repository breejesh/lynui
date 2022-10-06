import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './team.css?inline';

// Qwik components can be asynchronous
export const Team = component$(() => {
    useStylesScoped$(styles);
    // Returns JSX
    return (
        <>
            {/*====== TEAM STYLE TWO START ======*/}
            <section id="team" className="team-area">
                <div class="section-title-four">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <h2 class="fw-bold">Meet the team!</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team text-center team-style-two">
                                <div className="team-image">
                                    <img src="assets/images/team-1.avif" alt="Team 1"  height="960" width="640"/>
                                </div>
                                <div className="team-content">
                                    <h4 className="name">John Doe</h4>
                                    <span className="sub-title">Art Director</span>
                                    <ul className="social">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single team */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team text-center team-style-two">
                                <div className="team-image">
                                <img src="assets/images/team-2.avif" alt="Team 2"  height="960" width="640"/>
                                </div>
                                <div className="team-content">
                                    <h4 className="name">Jane Doe</h4>
                                    <span className="sub-title">Art Director</span>
                                    <ul className="social">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single team */}
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-team text-center team-style-two">
                                <div className="team-image">
                                <img src="assets/images/team-3.avif" alt="Team 3" height="960" width="640"/>
                                </div>
                                <div className="team-content">
                                    <h4 className="name">Jason Doe</h4>
                                    <span className="sub-title">Art Director</span>
                                    <ul className="social">
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">
                                                <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* single team */}
                        </div>
                    </div>
                    {/* row */}
                </div>
                {/* container */}
            </section>
            {/*====== TEAM STYLE TWO ENDS ======*/}
        </>
    );
});