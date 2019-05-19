import React from 'react'
import { Link } from 'gatsby'
import DOWBar from '../dow-bar/dow-bar'
import Event from '../event/event'
import './events.scss'
import '../event/event.scss'

const Events = () => (
  <div className="events">

    <div className="events__entry-msg">
    <p>Come along and take part in one of our events,</p>
    <p>or <Link to="/contact-us">book an empty slot</Link> if you want to <Link to="/contact-us">hire the hall</Link> or <Link to="/contact-us">run your own class.</Link></p>
    </div>

    <h2>Weekly events:</h2>

    <DOWBar>Mondays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="12:15"
            timeEnd="14:00"
            title="The Monday Lunch"
            cost="£3.50"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>A freshly cooked three course meal with tea or coffee.</p>
        <p>Games available too. All welcome.</p>
        <p>Every Monday except Bank holidays.</p>
        <p>For more information call us on <a href="tel:02083429524">0208 342 9524</a> or email us at <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a></p>
        </Event>

    <DOWBar>Tuesdays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="19:00"
            timeEnd="20:00"
            title="Judo"
            cost="please contact class tutor direct"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Judo with Roland. Protect yourself, get fit and have fun.</p>
        <p>Email <a href="mailto:Roland.White@blueyonder.co.uk">Roland.White@blueyonder.co.uk</a> for extra information.</p>
        </Event>

    <DOWBar>Wednesdays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="10:00"
            timeEnd="11:00"
            title="Pilates"
            cost="free"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Class with Laura Holland specifically for cancer recoverers and survivors (sponsored by <a href='https://www.tottenhamhotspur.com/' target='_blank' rel='noopener noreferrer'>Tottenham Hotspur</a>).</p>
        <p>Call <a href="tel:07393149888">07393 149888</a> for more information.</p>
        </Event>

        <Event
            bg="entry-even"
            timeStart="16:00"
            timeEnd="18:00"
            title="Kidsart – classes for children"
            cost="please contact class tutor direct"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>A chance for kids to be creative and to learn some art appreciation.</p>
        <p>For more information call <a href="tel:07827275821">07827 275821.</a></p>
        </Event>

    <DOWBar>Thursdays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="14:00"
            timeEnd="15:00"
            title="Yoga with Ad de Koning"
            cost="please contact class tutor direct"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Gentle yoga suitable for all levels of ability.</p>
        <p>Call Ad on <a href="tel:07949408036">07949 408036</a>, or email <a href="mailto:ajdekoning@tiscali.co.uk">ajdekoning@tiscali.co.uk</a></p>

        </Event>

        <Event
            bg="entry-even"
            timeStart="19:15"
            timeEnd="20:30"
            title="Yoga with Steven Gould"
            cost="please contact class tutor direct"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Contact Steven on <a href="tel:07891581166">07891 581 166</a> or email him at <a href="mailto:angleshade@gmail.com">angleshade@gmail.com</a></p>
        </Event>

    <DOWBar>Fridays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="12:00"
            timeEnd="13:30"
            title="The Friday Lunch"
            cost="£3.00"
            venue="The Highgate Newtown Community Centre"
            venueLink="https://www.google.com/maps/place/Highgate+Newtown+Community+Centre/@51.5627592,-0.1432108,15z/data=!4m5!3m4!1s0x0:0x578a7378e932e530!8m2!3d51.5627592!4d-0.1432108"
        >
        <p>Come over to enjoy a 2 courses fish meal.</p>
        </Event>

        <Event
            bg="entry-even"
            timeStart="14:00"
            timeEnd="17:00"
            title="Film Club"
            cost="free"
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Free film club, all welcome.</p>
        <p>Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail</a> for more information.</p>
        <p>For a full list of films shown, please <Link to="/film-club">see our dedicated Film Club page.</Link></p>
        </Event>

    <DOWBar>Saturdays</DOWBar>

        <Event
            bg="entry-odd"
            timeStart="09:30"
            timeEnd="10:30"
            title="Zum Dance"
            cost="£10 per session or £8 if signing up for 10 sessions."
            venue="The Holly Lodge Community Centre"
            venueLink="https://www.google.com/maps/place/Holly+Lodge+Community+Centre/@51.5646877,-0.1504739,17z/data=!3m1!4b1!4m5!3m4!1s0x48761a5175b7d52f:0xdec4c5d5e49a058a!8m2!3d51.5646844!4d-0.1482852"
        >
        <p>Keep fit and have fun with Zumba! All welcome, all ages and abilities.</p>
        <p>Email <a href="mailto:hollylodgelondon@hotmail.com">hollylodgelondon@hotmail.com</a> or see posters for details.</p>
        </Event>

    <DOWBar>Sundays</DOWBar>

        <article className="event__entry-odd">
            <div className="event__description">
                <p>NO EVENTS SCHEDULED</p>
                <p>Contact us if you would like to <Link to="/contact-us">run your own class.</Link></p>
            </div>
        </article>

    <div className="events__specials">
        <h2>Special events:</h2>
        <p>Next AGM not schedule yet, please check back again soon for details.</p>
    </div>

  </div>
)

export default Events
