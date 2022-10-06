import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './features.css?inline';

// Qwik components can be asynchronous
export const Features = component$(() => {
    useStylesScoped$(styles);
    // Returns JSX
    return (
        <>
            <section id="features" class="features-area features-nine">
                <div class="section-title-four">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="content">
                                    <h2 class="fw-bold">Our Amazing Features</h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available,
                                        but the majority have suffered alteration in some form.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="features-items">
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="features-title">
                                    <h5 class="sub-title">Learn & Share</h5>
                                    <h2 class="main-title">
                                        Learn Principles of <br />
                                        Design Ethics
                                    </h2>
                                    <p class="text-lg">
                                        Combined with the power of design thinking, these extensively
                                        researched best practices from some of the world’s best design
                                        teams will help you nail the fundamentals of product design
                                        and do great work.
                                    </p>
                                    <div class="feature-btn">
                                        <a href="javascript:void(0)" class="btn primary-btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="features-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/features/feature-1.svg"
                                        alt="features"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="features-items">
                        <div class="row justify-content-between">
                            <div class="col-lg-5 order-lg-last">
                                <div class="features-title">
                                    <h5 class="sub-title">Learn & Share</h5>
                                    <h2 class="main-title">
                                        Learn Principles of <br />
                                        Design Ethics
                                    </h2>
                                    <p class="text-lg">
                                        Combined with the power of design thinking, these extensively
                                        researched best practices from some of the world’s best design
                                        teams will help you nail the fundamentals of product design
                                        and do great work.
                                    </p>
                                    <div class="feature-btn">
                                        <a href="javascript:void(0)" class="btn primary-btn-outline">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 order-lg-first">
                                <div class="features-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/features/feature-2.svg"
                                        alt="features"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="features-items">
                        <div class="row justify-content-between">
                            <div class="col-lg-5">
                                <div class="features-title">
                                    <h5 class="sub-title">Learn & Share</h5>
                                    <h2 class="main-title">
                                        Learn Principles of <br />
                                        Design Ethics
                                    </h2>
                                    <p class="text-lg">
                                        Combined with the power of design thinking, these extensively
                                        researched best practices from some of the world’s best design
                                        teams will help you nail the fundamentals of product design
                                        and do great work.
                                    </p>
                                    <div class="feature-btn">
                                        <a href="javascript:void(0)" class="btn primary-btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="features-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/features/feature-1.svg"
                                        alt="features"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});