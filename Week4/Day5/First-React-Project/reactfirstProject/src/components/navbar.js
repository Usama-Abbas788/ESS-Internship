export function createNavbar() {
    return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">

                <!-- Brand -->
                <a class="navbar-brand fw-bold" href="index.html">
                    My Store
                </a>

                <!-- Mobile Toggle -->
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar Content -->
                <div class="collapse navbar-collapse" id="mainNavbar">

                    <!-- Links -->
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                        <li class="nav-item">
                            <a class="nav-link" href="index.html">
                                Products
                            </a>
                        </li>

                    </ul>

                    <!-- Cart -->
                    <a
                        href="cart.html"
                        class="btn btn-light position-relative"
                    >
                        <ion-icon
                            name="cart"
                            style="font-size: 22px; vertical-align: middle;"
                        ></ion-icon>

                        Cart

                        <span
                            id="cart-count"
                            class="badge bg-primary rounded-pill position-absolute top-0 start-100 translate-middle"
                        >
                            0
                        </span>
                    </a>

                </div>

            </div>
        </nav>
    `;
}