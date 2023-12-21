let template = `
    <nav className="navbar navbar-expand-lg lb-primary">
        <div className="container">
            <div className="logo-wrapper">
                <a className="logo" href="index.html"> <img src="img/logo.png" height="90" className="logo-img" alt=""/> </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
                    className="navbar-toggler-icon"><i className="ti-menu"></i></span> </button>
            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a className="nav-link" href="index.html#buyers">For buyers</a></li>
                    <li className="nav-item"><a className="nav-link" href="index.html#sellers">For Sellers</a></li>
                    <li className="nav-item"><a className="nav-link" href="request.html">Request a demo</a></li>
                </ul>
            </div>
        </div>
    </nav>
`;

export default function Navbar() {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};