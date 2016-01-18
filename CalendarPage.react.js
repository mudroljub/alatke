"use strict";

import React from 'react';
import moment from 'moment';
import 'moment-range';
import CalendarEventActions from '../actions/CalendarEventActions';
import CalendarEventStore from '../stores/CalendarEventStore';
import ActionBar from '../ui/elements/ActionBar.react';
import DateNavigation from '../ui/elements/DateNavigation.react';
import LoadingAnimation from '../ui/elements/LoadingAnimation.react';
import CalendarEventModal from './CalendarEventModal.react';

/**
 * CalendarPage component
 */
export default class CalendarPage extends React.Component {
    /**
     * React: state
     */
    state = {
        startDate: moment().startOf('month'),
        calendarEventsForPeriod: null,
        calendarEventToUpdate: null,
        weekDayToUpdate: null,
        isCalendarEventModalVisible: false
    };

    /**
     * React: componentDidMount
     */
    componentDidMount() {
        // add store listeners
        CalendarEventStore.addListener(CalendarEventStore.ENTITY_COLLECTION_UPDATED, this._setCalendarEvents);

        // get calendarEvents for period
        this._getCalendarEvents();
    }

    /**
     * React: componentWillUnmount
     */
    componentWillUnmount() {
        // remove store listeners
        CalendarEventStore.removeListener(CalendarEventStore.ENTITY_COLLECTION_UPDATED, this._setCalendarEvents);
    }

    render() {
        var weekStart = moment(this.state.startDate).weekday(0);
        var weekEnd = moment(this.state.startDate).weekday(6);
        var tabularContent = null;

        // calendar loading
        if (this.state.calendarEventsForPeriod === null) {
            tabularContent = (
                <div className="content-loading">
                    <LoadingAnimation />
                </div>
            );

            // calendar loaded
        } else {
            var calendarRows = [];
            do {
                let week = moment.range(weekStart, weekEnd);
                let calendarCells = [];

                week.by('days', (weekDay) => {
                    let className = null;
                    let calendarEvent = this.state.calendarEventsForPeriod.get(weekDay.format('YYYY-MM-DD'));

                    if (!weekDay.isSame(this.state.startDate, 'month')) {
                        className = 'not-in-month';
                    } else if (weekDay.isSame(moment(), 'day')) {
                        className = 'today';
                    } else if (calendarEvent) {
                        className = 'event';
                    }

                    calendarCells.push(
                        <td key={weekDay.format('MM-DD')} className={className}
                            onClick={this._toggleCalendarEventModal.bind(null, calendarEvent ? calendarEvent : null, weekDay)}>
                            <div>
                                {weekDay.format('D') == 1 ? weekDay.format('MMM D') : weekDay.format('D')}
                                {!calendarEvent ? null : (
                                    <span className="event-name">{calendarEvent.eventName}</span>
                                )}
                            </div>
                        </td>
                    );
                });

                calendarRows.push(
                    <tr key={weekStart.format('W')}>{calendarCells}</tr>
                );

                weekStart.add(1, 'weeks');
                weekEnd.add(1, 'weeks');
            } while (weekStart.isSame(this.state.startDate, 'month'));

            // week day names
            var weekDays = [];
            moment.range(weekStart, weekEnd).by('days', (weekDay) => {
                weekDays.push(
                    <th key={weekDay.format('dddd')}>{weekDay.format('dddd')}</th>
                );
            });

            tabularContent = (
                <table>
                    <thead>
                    <tr>
                        {weekDays}
                    </tr>
                    </thead>
                    <tbody>
                    {calendarRows}
                    </tbody>
                </table>
            );
        }

        return (
            <div className="calendar-page">
                <ActionBar>
                    <ActionBar.Actions type="secondary">
                        <DateNavigation navigateBy="month" startDate={this.state.startDate}
                                        onPrevious={this._onDateChange} onNext={this._onDateChange}/>
                    </ActionBar.Actions>
                </ActionBar>

                {tabularContent}

                {this.props.children}

                <CalendarEventModal isVisible={this.state.isCalendarEventModalVisible}
                                    weekDay={this.state.weekDayToUpdate}
                                    calendarEvent={this.state.calendarEventToUpdate}
                                    toggleCalendarEventModal={this._toggleCalendarEventModal}/>
            </div>
        );
    }

    /**
     * Get calendar (calendarEvents) for time period
     */
    _getCalendarEvents = () => {
        CalendarEventActions.getCalendarEventCollection({}, {
            startDate: moment(this.state.startDate).startOf('month').weekday(0).format('YYYY-MM-DD'),
            endDate: moment(this.state.startDate).endOf('month').weekday(6).format('YYYY-MM-DD')
        });
    };

    /**
     * Load calendarEvents from store for time period (calendar)
     */
    _setCalendarEvents = () => {
        var calendarEventsForPeriod = CalendarEventStore.getCalendarEventsForPeriod(
            moment(this.state.startDate).startOf('month').weekday(0),
            moment(this.state.startDate).endOf('month').weekday(6),
            '_calendarEventsByDate'
        );

        this.setState({
            calendarEventsForPeriod: calendarEventsForPeriod
        });
    };

    /**
     * Change time period
     *
     * @param {Object} startDate
     */
    _onDateChange = (startDate) => {
        this.setState({
            startDate: startDate,
            calendarEventsForPeriod: null
        }, this._getCalendarEvents);
    };

    /**
     * Toggle calendarEvent modal
     *
     * @params {CalendarEvent} calendarEvent
     * @params {Object} weekDay
     */
    _toggleCalendarEventModal = (calendarEvent, weekDay) => {
        this.setState({
            isCalendarEventModalVisible: !this.state.isCalendarEventModalVisible,
            calendarEventToUpdate: calendarEvent,
            weekDayToUpdate: weekDay
        });
    };
}
