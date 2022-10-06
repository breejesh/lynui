import { component$, useStore, $, useStylesScoped$ } from '@builder.io/qwik';
import styles from './navbar.css?inline';

// Qwik components can be asynchronous
export const Navbar = component$(() => {
    useStylesScoped$(styles);
    const state = useStore({
        navbarCollapseActive: false,
    });

    const toggleNav = $(function () {
        state.navbarCollapseActive = !state.navbarCollapseActive;
    });

    // Returns JSX
    return (
        <>
            <section class="navbar-area navbar-seven fixed-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg">
                                <a class="navbar-brand" href="">
                                    <img width="500" height="172" src="assets/images/logo.png" alt="Logo" style="max-width: 150px;" />
                                </a>
                                <button
                                    className={"navbar-toggler " + (state.navbarCollapseActive ? 'active' : '')}
                                    type="button"
                                    aria-controls="navbarseven"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                    onClick$={toggleNav}
                                >
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                    <span class="toggler-icon"></span>
                                </button>
                                <div className={"collapse navbar-collapse sub-menu-bar " + (state.navbarCollapseActive ? 'show' : '')}
                                    id="navbarseven" >
                                    <ul class="navbar-nav ms-auto">
                                        <li class="nav-item">
                                            <a href="#" onClick$={toggleNav}>Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#features" onClick$={toggleNav}>Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#clients" onClick$={toggleNav}>Clients</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#pricing" onClick$={toggleNav}>Pricing</a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="#team" onClick$={toggleNav}>Team</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="navbar-btn d-none d-sm-inline-block">
                                    <ul>
                                        <li>
                                            <a class="btn btn-sm primary-btn" href="javascript:void(0)">Sign In</a>
                                        </li>
                                        <li>
                                            <a class="btn btn-sm primary-btn primary-color" href="javascript:void(0)">Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});