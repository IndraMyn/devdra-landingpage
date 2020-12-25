import React from 'react'
import BannerSection from '../Sections/HomeSection/BannerSection'
import ContactSection from '../Sections/HomeSection/ContactSection'
import IntroductionSection from '../Sections/HomeSection/IntroductionSection'
import OurProductSection from '../Sections/HomeSection/OurProductSection'

function HomePage(props) {
    return(
        <>
            <section className="mt-5 mb-5">
                <BannerSection />
            </section>
            <section style={{background: '#FFFFFF'}} className="border-top-custom" id="introduction">
                <IntroductionSection />
            </section>
            <section style={{background: '#f8f8ff'}} className="border-top-custom" id="products">
                <OurProductSection />
            </section>
            <section style={{background: '#F0FFFF'}} className="border-top-custom" id="contact">
                <ContactSection />
            </section>
        </>
    )
}

export default HomePage