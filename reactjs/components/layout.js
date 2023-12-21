import Navbar from './navbar.js';
import RequestForm from './form.js';
import Articles from './articles.js';
import Footer from './footer.js';

let template = `
<>
<Navbar />
<main className="lb-primary">
    <div className="container mb-5">
        <div className="row justify-content-center">
            <div className="col-md-6 text-center section-text">
                <h1>Request a demo</h1>
                <p>If you are a professional, we offer a desktop admin platform, to allow a better and faster
                    management of your whole business</p>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-7 form-wrapper">
                <RequestForm/>
            </div>
            <div className="col-md-7">
                <Articles/>
            </div>
        </div>
    </div>
</main>
<Footer/>
</>
`;

export default function Layout() {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};