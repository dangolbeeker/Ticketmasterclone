// Packages
import React, { Component } from "react";
import {
    Link,
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";

// Constants
import { alertify, formatDate } from "../../constants/baseConstants";

// Actions
import {
    fetchEventRetrieveData,
    fetchEventRetrieveLoading
} from "../../actions/eventActions";

// Services
import { retrieveEvent } from "../../services/eventServices";

// Components
import Loader from "../../components/Loader/Loader";

// Styles
import * as Style from "./EventCardStyle";


class EventCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            eventId: props.eventId,
            redirect: false
        }
    }

    componentDidMount() {
        this.props.onfetchEventRetrieveLoading(true);
        retrieveEvent(this.state.eventId, (response) => {
            if (response) {
                if (response.statusCode === 200) {
                    var data = {}
                    data[this.state.eventId] = response.body;
                    this.props.onfetchEventRetrieveData(data);
                    document.title = "Ticket Master Event | " + response.body.name;
                } else if (response.statusCode === 404) {
                    alertify.error("Event not found.");
                    this.setRedirect(true);
                } else {
                    alertify.error("An unexpected error has occurred and try again later.");
                }
            } else {
                this.setRedirect(true);
                alertify.error("Event not found.");
            }
            this.props.onfetchEventRetrieveLoading(false);
        });
    }

    setRedirect(value) {
        this.setState({
            redirect: value
        })
    }

    render() {
        const { redirect, eventId } = this.state;
        const { event } = this.props;

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <div>
                {event.loading && !event.data[eventId] ? (
                    <Loader></Loader>
                ) : event.data[eventId] && (
                    <Style.AppWrapper>
                        <Style.Name>{event.data[eventId].name}</Style.Name>
                        {event.data[eventId].promoter && event.data[eventId].promoter.description && (
                            <Style.NameDetail>{event.data[eventId].promoter.description}</Style.NameDetail>
                        )}
                        {event.data[eventId]._embedded && event.data[eventId]._embedded.venues.length > 0 && (
                            <p>
                                <Style.Span className="info">Adress: </Style.Span>
                                <Style.Span>{event.data[eventId]._embedded.venues[0].address.line1} / {event.data[eventId]._embedded.venues[0].address.line2}</Style.Span>
                            </p>
                        )}
                        {event.data[eventId]._embedded && event.data[eventId]._embedded.venues.length > 0 && (
                            <Style.Zone>{event.data[eventId]._embedded.venues[0].city.name} / {event.data[eventId]._embedded.venues[0].country.name}</Style.Zone>
                        )}
                        {event.data[eventId].dates && event.data[eventId].dates.start && (
                            <span>
                                <Style.Span className="info">Date: {formatDate(event.data[eventId].dates.start.localDate)}</Style.Span>
                            </span>
                        )}
                        {event.data[eventId].images.length > 0 && (
                            <Style.Thumb src={event.data[eventId].images[0].url}></Style.Thumb>
                        )}
                    </Style.AppWrapper>
                )}

                <Link to="/">
                    <Style.Home>Home Page</Style.Home>
                </Link>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
    onfetchEventRetrieveData: fetchEventRetrieveData,
    onfetchEventRetrieveLoading: fetchEventRetrieveLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
