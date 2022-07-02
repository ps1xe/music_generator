import DefaultNavbar from "../Header/DefaultNavbar";
import "./Contacs.css"

const Contacs = () => {
    return (
        <>
        <DefaultNavbar/>
        <div className="contact-box">
            <div className="contact-header">GET IN CONTACT</div>
            <div className="contact-content">
                <div className="job-title">GENERAL DEVELOPER</div>
                <div style={{ fontSize: "20px" }}>Gerasimov Evgeny</div>
                <div className="contact-link-header">EMAIL:</div>
                <div className="contact-link">evgesha228997@gmail.com</div>
                <div className="contact-link-header">GITHUB:</div>
                <a href="https://github.com/ps1xe" className="contact-link">@ps1xe</a>
        </div>
        </div >
        </>
    );
}
export default Contacs;