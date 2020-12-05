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
            <section className="mb-5">
                <IntroductionSection />
            </section>
            <section className="mb-5" style={{background: '#f8f8ff'}}>
                <hr />
                <OurProductSection />
            </section>
            <section className="mb-3" style={{background: '#F0FFFF'}}>
                <hr />
                <ContactSection />
            </section>
        </>
    )
}

export default HomePage