import React from "react";
import InfoSet from "./InfoSet";

function About() {
    return(
        <section className="about">
            <InfoSet 
                sectionName={"What is STARNEST?"} 
                title={"A Gateway for the Writers to Join the Web3 Ecosystem."}
                subtitle={'We believe "Web3 will change the whole experiences of writing and reading as it has already did in other areas."'}
                content={""}
                imgLink={require("./img/about.png")}
                imgAlt={"about starnest"}
                picWidth={"70%"}
            />
            <p className="textBox">
            Tens of thousand of writers are creating stories everyday. However, only a handful of them are being seen by the public, let alone publishing physical books, or used to make animations, movies or drawings. Moreover, there are many amateur writers who don't have enough time to finish their masterpieces.
            <br/>STARNEST is a service connecting blockchain technology to help authors in co-creating stories and earning their fair share of the the profit from their works. Smart contract empowers digital copyrights to become tradable and can easily split the profit generated by the stories.
            </p>            
        </section>
    );
}

export default About;