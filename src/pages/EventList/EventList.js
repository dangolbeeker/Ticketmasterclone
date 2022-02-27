// Packages
import React, { Component } from "react";

// Components
import EventTable from '../../components/EventTable/EventTable';
import Search from '../../components/Search/Search'
import Footer from '../../components/Footer/Footer'


class EventList extends Component {
    constructor(props) {
        super(props);

        document.title = "Ticket Master Events"
    }

    render() {
        return (
            <div>
                <Search />
                <EventTable />
                <Footer />
            </div>
        );
    }
}


export default EventList;
