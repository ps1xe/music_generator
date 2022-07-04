import DefaultNavbar from "../Header/DefaultNavbar";
import "./About.css"
const About = () => {

    return (

        <>
            <DefaultNavbar />
            <div className="about">
                <div className="about-header">
                        Web application for music generation
                </div>

                <div className="boxinfo" data-aos="zoom-out-up">
                    <img className="pictures-inf"  src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-08-1024x576.png" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>
                </div>

                <div className="boxinfo" data-aos="zoom-out-up">
                <img className="pictures-inf" src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-18-1024x576.jpg" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>
                   
                </div>

                <div className="boxinfo" data-aos="zoom-out-up">
                    <img className="pictures-inf" src="https://maxilla.s3.amazonaws.com/web/wp-content/uploads/2021/01/WT100-13-1024x576.png" />
                    <div className="boxinfo-boxtext">
                        <div className="boxinfo-header"> What the app does?</div>
                        <div className="boxinfo-content">An instrument that turns the user into both a composer and a conductor of an improvising ensemble:
                            everyone plays well, in harmony, someone is a soloist,
                            and the rest accompany and the leader can order someone to join the game at any moment. It's great!!!</div>
                    </div>
                </div>

            </div>
        </>


    );
}
export default About;