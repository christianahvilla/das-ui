import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es';
import styled from '@emotion/styled';
import momentPlugin from '@fullcalendar/moment';
import { arrayOf, shape } from 'prop-types';
import { Panel } from 'rsuite';

const StyleWrapper = styled.div`
    .fc-button.fc-prev-button, .fc-button.fc-next-button, .fc-button.fc-button-primary {
        background: none;
        border-radius: 8px;
        font-size: 0.875rem;
    }
    .fc-button.fc-prev-button, .fc-button.fc-next-button {
        border-radius: 50%;
        color: rgb(99, 115, 129);
        border: none;
    }
    .fc-button.fc-prev-button:hover, .fc-button.fc-next-button:hover {
        border: none;
    }
    .fc-button-primary:hover {
        color: rgb(99, 115, 129);
        background-color: rgba(145, 158, 171, 0.16);
        border: 1px solid rgba(145, 158, 171, 0.32);
    }
    .fc-viewDay-button, .fc-viewMonth-button, .fc-viewWeek-button, .fc-viewList-button  {
        font-family: Material Icons!important;
        color: rgb(145, 158, 171);
        border: 1px solid rgba(145, 158, 171, 0.32);
    }
    .fc {
        font-family: "Public Sans", sans-serif;
    }
    .fc-toolbar, .fc-col-header {
        text-transform: capitalize;
        color: rgb(33, 43, 54);
    }
    .fc-toolbar-title {
        font-size: 1.125rem;
    }
    .fc-today-button {
        background-color: #6666FA!important;
        box-shadow: rgb(102 102 250 / 24%) 0px 8px 16px 0px;
        border: none;
    }
    .fc-today-button:hover {
        background-color: #6666FA!important;
        box-shadow: rgb(102 102 250 / 24%) 0px 8px 16px 0px;
        border: none;
        color: white;
    }
    .fc-daygrid-day.fc-day.fc-day-today  {
        background-color: rgba(145, 158, 171, 0.16);
    }
    .fc table {
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        border-bottom-width: 0;
        font-size: 1em;
    }
    .fc .fc-col-header {
        box-shadow: rgb(145 158 171 / 24%) 0px -1px 0px inset;
    }
    
    .fc .fc-scrollgrid-section>* {
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
        border-bottom-width: 0;
    }
    .fc .fc-col-header th {
        border-color: transparent;
    }
    .fc .fc-view-harness {
        flex-grow: 1;
        position: relative;
    }
    .fc .fc-scrollgrid-liquid {
        height: 100%;
    }
    .fc .fc-toolbar.fc-header-toolbar {
        margin: 1.5em 1em;
    }
`;

const CommonCalendar = (props) => {
    const {
        events,
    } = props;

    const calendarRef = useRef(null);
    const calendarApi = calendarRef.current?.getApi();

    const buttons = {
        viewDay: {
            text: 'calendar_view_day',
            click() {
                calendarApi?.changeView('timeGridDay');
            }
            ,
        },
        viewMonth: {
            text: 'calendar_view_month',
            click() {
                calendarApi?.changeView('dayGridMonth');
            }
            ,
        },
        viewWeek: {
            text: 'calendar_view_week',
            click() {
                calendarApi?.changeView('timeGridWeek');
            }
            ,
        },
        viewList: {
            text: 'view_agenda',
            click() {
                calendarApi?.changeView('listWeek');
            }
            ,
        },
    };

    return (
        <Panel shaded bodyFill>
            <StyleWrapper>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin, momentPlugin]}
                    headerToolbar={{
                        left: 'viewMonth viewWeek viewDay viewList',
                        center: 'title',
                        right: 'prev today next',
                    }}
                    initialView="dayGridMonth"
                    editable
                    selectable
                    selectMirror
                    dayMaxEvents
                    locale={esLocale}
                    slotLabelInterval="00:15"
                    slotDuration="00:15"
                    allDaySlot={false}
                    slotMinTime="09:00"
                    slotMaxTime="20:00"
                    buttonIcons
                    nowIndicator
                    ref={calendarRef}
                    customButtons={{
                        ...buttons,
                    }}
                    firstDay={0}
                    hiddenDays={[0]}
                    stickyHeaderDates={false}
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: false,
                    }}
                    events={events}
                    views={{
                        dayGridWeek: {
                            titleFormat: '{DD.{MM.}}YYYY',
                        },
                        listWeek: {
                            titleFormat: '{DD.{MM.}}YYYY',
                        },
                    }}
                />
            </StyleWrapper>
        </Panel>
    );
};

export default CommonCalendar;

CommonCalendar.defaultProps = {
    events: [],
};

CommonCalendar.propTypes = {
    events: arrayOf(shape({})),
};
