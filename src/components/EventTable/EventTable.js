// Packages
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

// Actions
import {
    fetchEventListData,
    fetchEventListPage,
    fetchEventListLoading
} from "../../actions/eventActions";

// Constants
import { alertify, createUrl, formatDate } from "../../constants/baseConstants";

// Services
import { listEvent } from "../../services/eventServices";

// Components
import Loader from "../Loader/Loader";

// Styles
import * as Style from './EventTableStyle.js';

// Global Styles
import * as Global from '../../styles/GlobalStyle';


class EventTable extends Component {
    constructor(props) {
        super(props);

        this.getPageData = this.getPageData.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        var pageNumber = this.props.events.page.number >= 0 ? this.props.events.page.number : 0;
        this.getPageData(pageNumber);
        window.addEventListener("resize", this.updateDimensions);
    }

    getPageData(pageNumber) {
        if (this.hasPageExist(pageNumber)) {
            var keyword = this.props.events.keyword;
            this.props.onfetchEventListLoading(true);
            this.props.onfetchEventListData([]);
            listEvent(pageNumber, keyword, (response) => {
                if (response) {
                    if (response.statusCode === 200) {
                        if (response.body._embedded && response.body._embedded.events) {
                            this.props.onfetchEventListData(response.body._embedded.events);
                        }
                        if (response.body.page) {
                            this.props.onfetchEventListPage(response.body.page);
                        }
                    } else {
                        alertify.error("An unexpected error has occurred and try again later.");
                    }
                } else {
                    alertify.error("An unexpected error has occurred and try again later.");
                }
                this.props.onfetchEventListLoading(false);
            });
        }
    }

    hasPageExist(pageNumber) {
        var totalPages = this.props.events.page.totalPages ? this.props.events.page.totalPages : 0;

        if (pageNumber <= totalPages) {
            return true;
        } else {
            return false;
        }
    }

    updateDimensions() {
        if (
            window.innerWidth > 1024 &&
            this.props.events.page.pagination &&
            this.props.events.page.pagination.screen !== "desktop") {
            this.props.onfetchEventListPage(this.props.events.page);
        } else if (
            window.innerWidth < 1024 &&
            window.innerWidth > 600 &&
            this.props.events.page.pagination &&
            this.props.events.page.pagination.screen !== "tablet") {
           this.props.onfetchEventListPage(this.props.events.page);
        } else if (
            window.innerWidth < 600 &&
            this.props.events.page.pagination &&
            this.props.events.page.pagination.screen !== "mobile") {
           this.props.onfetchEventListPage(this.props.events.page);
        }
    }

    render() {
        const { events } = this.props;

        return (
            <div>
                {events.loading ? (
                    <Loader></Loader>
                ) : events.data.length > 0 ? (
                    <Global.AppWrapper>
                        <Style.Table>
                            <tbody>
                                {events.data.map((event, index) => {
                                    return (
                                        <Style.Row key={index}>
                                            <Style.Date>
                                                {event.images.length > 0 && (
                                                    <Style.Thumb src={ event.images[0].url }></Style.Thumb>
                                                )}
                                                {event.dates && event.dates.start && (
                                                    <div>
                                                        <Style.DateText>Date: {formatDate(event.dates.start.localDate)}</Style.DateText>
                                                    </div>
                                                )}
                                            </Style.Date>
                                            <Style.Location>
                                                <Style.Name>{event.name}</Style.Name>
                                                {event._embedded.venues.length > 0 && (
                                                    <Style.City>
                                                        <i>{event._embedded.venues[0].city.name} / {event._embedded.venues[0].country.name}</i>
                                                    </Style.City>
                                                )}
                                            </Style.Location>
                                            <Style.Detail>
                                                <Style.DetailLink>
                                                    <Link to={createUrl("event", event.id)}>Detail</Link>
                                                </Style.DetailLink>
                                            </Style.Detail>
                                        </Style.Row>
                                    )
                                })}
                            </tbody>
                        </Style.Table>

                        {events.page.pagination && (
                            <Style.Pagination>
                                <Style.PreviousAppButton
                                    onClick={() => this.getPageData(events.page.number - 1)}
                                    type="button"
                                    disabled={!events.page.pagination.hasPreviousPage}>
                                    Previous Page
                                </Style.PreviousAppButton>
                                {events.page.pagination.numbers.map((value, index) =>
                                    <Style.PaginationButton
                                        onClick={() => this.getPageData(value)}
                                        type="button"
                                        key={index}
                                        active={events.page.number == value}>
                                        {value + 1}
                                    </Style.PaginationButton>
                                )}
                                <Style.NextAppButton
                                    onClick={() => this.getPageData(events.page.number + 1)}
                                    type="button"
                                    disabled={!events.page.pagination.hasNextPage}>
                                    Next Page
                                </Style.NextAppButton>
                            </Style.Pagination>
                        )}
                    </Global.AppWrapper>
                ) : (
                    <Style.NotFound>
                        <h2>Event not found.</h2>
                    </Style.NotFound>
                )}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = {
    onfetchEventListData: fetchEventListData,
    onfetchEventListPage: fetchEventListPage,
    onfetchEventListLoading: fetchEventListLoading
};

export default connect(mapStateToProps, mapDispatchToProps)(EventTable);
