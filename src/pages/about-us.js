import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import LayoutPage from '../components/layout-page/layout-page'
import SEO from '../components/seo'

const AboutUsPage = ({ data }) => (
  <LayoutPage pageTitle="About Us">
    <SEO title="About Us" />

    <h2>The Centre Now</h2>
    <p>The Holly Lodge Community Centre is a registered small charity (Number 293003) run by volunteers, serving our local community.</p>
    <p>Located on the site of what was formerly the dining pavilion on historic Holly Lodge Estate in Highgate, North London, we have two sites:</p>
    <ul>
        <li>The Community Centre, situated at 30, Makepeace Avenue N6 6HL and</li>
        <li>the Nursery, located one street away in Oakeshott Avenue.</li>
    </ul>
    <figure>
        <Img fluid={data.imageOne.childImageSharp.fluid} alt="Holly-Lodge-Community-Centre-building" />
    </figure>

    <p><a href="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852" target='_blank' rel='noopener noreferrer'>Find us on Google Maps.</a></p>

    <hr />
    <h2>Holly Lodge History</h2>
    <p>Highgate lies in North London, and was once part of the Great Forest of Middlesex. The historic Holly Lodge Estate was initially the site and grounds of a villa built in 1798. The last individual owner of this beautiful estate was the renowned 19th century heiress and philanthropist Angela Burdett-Coutts, who entertained the likes of Queen Victoria and Charles Dickens.</p>
    <p>Nestled between Hampstead Heath to the west, and Waterlow Park to the east, the estate was eventually sold to developers in the 1920s. They in turn created a lovely garden suburb style neighbourhood with a mixture of houses and mansion blocks.</p>
    <p>The blocks were originally developed as a safe and pleasant environment to house young ladies who worked in London. The flats were often on the small side; however, there was an elaborate restaurant, a theatre, a library, tennis courts in all, a thriving women’s community on the slopes below Highgate Village.</p>
    <p>This history, along with the beautiful environment and amazing views over London, makes Holly Lodge a popular point of interest on historical walks.</p>
    <p>The building housing the community centre stands on the site of what once was the restaurant pavilion. The Holly Lodge Estate is now home to a vibrant mix of tenants, and house and flat owners, who make up an engaged and thriving local community.</p>
    <figure>
        <Img fluid={data.imageTwo.childImageSharp.fluid} alt="Holly-Lodge-Community-Centre-restaurant-and-lounge" />
    </figure>

    <hr />
    <h2>Committee</h2>
    <p>The Holly Lodge Community Centre is registered charity, run by volunteers, and managed by a Board of Trustees:</p>
    <ol>
        <li>Chair: Barbara Smith</li>
        <li>Treasurer: Hertha Koettner-Smith</li>
        <li>Committee Member: Elizabeth Doherty</li>
        <li>Committee Member: Camilla Scaramanger</li>
        <li>Committee Member: Karen Berges</li>
        <li>Committee Member: Josh Cedar</li>
        <li>Committee Member: Grace Livingston</li>
        <li>Committee Member: Anne Holve</li>
        <li>Committee Member: Roger Elliott</li>
    </ol>

    <hr />
    <h2>Local Contacts</h2>
    <ul>
        <li>Holly Lodge Estate Manager - Barbara Wheatley is the Estate manager and can answer queries on parking, security and other estate matters. <br />She and the Estate team are to be found in the hut at the top of the estate in Holly Lodge Gardens. <br />Email - <a href="mailto:manager@hle.org.uk">manager@hle.org.uk</a></li>
        <li>Holly Lodge Residents Association - The HLRA represents all the residents of the Holly Lodge Estate mansion blocks, whether council tenants, leaseholders or private tenants. <br />They organise social events and other activities, as well as putting residents’ concerns to Camden Council and working with the Council to create solutions. They are officially recognised as a TRA (Tenants and Residents Association) by Camden Council and the Holly Lodge Community Centre is a part of this Association. <br />Website: <a href="https://myhlra.org/" target="_blank" rel="noopener noreferrer">myhlra.org</a>. <br />Email: <a href="mailto:hollylodgera@gmail.com">hollylodgera@gmail.com</a></li>
    </ul>

    <hr />
    <h2>Places of interest nearby:</h2>
    <ul>
        <li><a href="https://www.cityoflondon.gov.uk/things-to-do/green-spaces/hampstead-heath/Pages/default.aspx" target="_blank" rel="noopener noreferrer">Hampstead Heath</a></li>
        <li><a href="http://www.waterlowpark.org.uk/" target="_blank" rel="noopener noreferrer">Waterlow Park</a></li>
        <li><a href="https://www.lauderdalehouse.org.uk/" target="_blank" rel="noopener noreferrer">Lauderdale House</a></li>
        <li><a href="https://www.highgatecemetery.org/" target="_blank" rel="noopener noreferrer">Highgate Cemetery</a> and Marx’s statue</li>
        <li><a href="https://www.visitlondon.com/things-to-do/london-areas/highgate/highgate-village" target="_blank" rel="noopener noreferrer">Highgate Village</a></li>
        <li><a href="https://www.hampsteadheath.net/" target="_blank" rel="noopener noreferrer">Parliament Hill Fields and Kite Hill</a></li>
        <li><a href="https://www.lonelyplanet.com/england/london/activities/water-sports/hampstead-heath-ponds" target="_blank" rel="noopener noreferrer">The men’s and women’s ponds</a></li>
        <li><a href="http://www.victorianweb.org/art/architecture/darbishire/1.html" target="_blank" rel="noopener noreferrer">Holly Village</a></li>
    </ul>

    <hr />
    <h2>Volunteers</h2>
    <p>Members of the public with an interest in the community can apply for a range of voluntary roles, such as helping with activities and events.</p>
    <p>Please use the <Link to="/contact-us">Contact Us</Link> page to find out more about the volunteering.</p>

  </LayoutPage>
)

export default AboutUsPage

export const query = graphql`
query {
    imageOne: file(relativePath: {eq: "Holly-Lodge-Community-Centre-building.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 740) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    imageTwo: file(relativePath: {eq: "Holly-Lodge-Community-Centre-restaurant-and-lounge.jpg"}) {
        childImageSharp {
            fluid(maxWidth: 740) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
}
`
