import Layout from './components/layout.js';

let template = `
<div>
    <h1>Heading</h1>
    <hr />
    <Layout/>
</div>
`;

function App() {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(React.createElement(App))