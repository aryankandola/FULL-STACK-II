import { memo, useMemo, useRef } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar({
  posts,
  onDateSelect,
  onEditPost,
  onMovePost,
}) {
  const calendarRef = useRef(null);

  const events = useMemo(() => {
    return posts.map((post) => ({
      id: post.id,
      title: post.title,
      start: post.start,
      extendedProps: {
        platform: post.platform,
      },
    }));
  }, [posts]);

  const handleDateClick = (info) => {
    onDateSelect(info.dateStr);
  };

  const handleEventClick = (info) => {
    const selectedPost = posts.find(
      (post) => post.id === info.event.id
    );

    if (selectedPost) {
      onEditPost(selectedPost);
    }
  };

  const handleEventDrop = (info) => {
    if (info.event.start) {
      onMovePost(
        info.event.id,
        info.event.start.toISOString()
      );
    }
  };

  const handleYearChange = (event) => {
    const year = event.target.value;

    if (!year) {
      return;
    }

    const calendarApi = calendarRef.current.getApi();
    const currentDate = calendarApi.getDate();

    const month = String(
      currentDate.getMonth() + 1
    ).padStart(2, "0");

    calendarApi.gotoDate(`${year}-${month}-01`);

    event.target.value = "";
  };

  const years = Array.from(
    { length: 201 },
    (_, index) => 1900 + index
  );

  return (
    <section className="calendar-section">

      <div className="calendar-heading">
        <h2>Content Calendar</h2>

        <select
          className="year-selector"
          defaultValue=""
          onChange={handleYearChange}
        >
          <option value="" disabled>
            Select Year
          </option>

          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}
        initialView="dayGridMonth"
        initialDate="2026-08-18"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right:
            "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        selectable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDrop={handleEventDrop}
        height="auto"
      />
    </section>
  );
}

export default memo(Calendar);