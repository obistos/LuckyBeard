let template = `
    <footer className="footer">
    <div className="container">
        <ul className="footer-nav">
            <li>Dealr Automotive Limited</li>
            <li>Registration number: 629444</li>
            <li>15 Harcourt street, St. Kevin's, Dublin 2 D02 XY47, Dublin, Ireland</li>
        </ul>
    </div>
</footer>
`;

export default function Footer() {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};