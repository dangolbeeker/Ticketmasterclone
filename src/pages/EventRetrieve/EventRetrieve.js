// Packages
import React, { Component } from "react";

// Components
import EventCard from '../../components/EventCard/EventCard';
import Footer from '../../components/Footer/Footer';


class EventRetrieve extends Component {
    render() {
        return (
            <div>
                <EventCard eventId={this.props.match.params.eventId}></EventCard>
                <Footer></Footer>
            </div>
        );
    }
}


export default EventRetrieve;
