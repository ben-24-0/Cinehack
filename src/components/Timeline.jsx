import React from "react";
import "./Timeline2.css";

const steps = [
  {
    id: 1,
    date: "June 4",
    title: "Registrations Open",
    subtitle: "The registration forms are released",
    color: "#0b3d91",
    icon: "/src/assets/icons/register.svg",
    label: "Step 01",
  },
  {
    id: 2,
    date: "June 16",
    title: "Event Launch Day",
    subtitle: "Official unveiling of the GenAI Hackathon",
    color: "#17a2b8",
    icon: "/src/assets/icons/launch.svg",
    label: "Step 02",
  },
  {
    id: 3,
    date: "July 5",
    title: "Submission Deadline",
    subtitle: "Last call to submit your ideas and solutions.",
    color: "#14c6a5",
    icon: "/src/assets/icons/submission.svg",
    label: "Step 03",
  },
  {
    id: 4,
    date: "July 6-10",
    title: "Initial Screening",
    subtitle: "Top entries selected for the next phase.",
    color: "#7cb342",
    icon: "/src/assets/icons/screening.svg",
    label: "Step 04",
  },
  {
    id: 5,
    date: "July 15",
    title: "Orientation",
    subtitle: "Guidelines and resources for selected teams.",
    color: "#d4a017",
    icon: "/src/assets/icons/orientation.svg",
    label: "Step 05",
  },
  {
    id: 6,
    date: "July 19-20",
    title: "Hackathon Showdown",
    subtitle: "24 Hour Hackathon day",
    color: "#e23b3b",
    icon: "/src/assets/icons/showdown.svg",
    label: "Step 06",
  },
];

export default function Timeline2() {
  return (
    <section className="timeline-wrapper" id="timeline" >
     
      <div className=" ml-72 flex " >
        <h2 className="text-4xl text-white md:text-5xl font-bold  mb-16 text-left ">
          Timeline
        </h2>
        <hr className="bg-amber-50" />
      </div>
      <div className="timeline">
        {steps.map((s, idx) => (
          <div className="timeline-item" key={s.id}>
            <div
              className="icon-circle"
              style={{ borderColor: s.color }}
              aria-hidden
            >
              <img src={s.icon} alt="" className="icon-img" />
            </div>

            <div
              className="chevron-card"
              style={{
                background: `linear-gradient(180deg, ${hexToRgba(
                  s.color,
                  0.12
                )}, rgba(17,24,39,0.9))`,
                borderTop: `4px solid ${s.color}`,
              }}
            >
              <div className="step-label">{s.label}</div>
            </div>

            <div className="timeline-meta">
              <div className="meta-date">{s.date}</div>
              <div className="meta-title">{s.title}</div>
              <div className="meta-sub">{s.subtitle}</div>
            </div>

            {/* small connector between items except last */}
            {idx < steps.length - 1 && <div className="item-connector" />}
          </div>
        ))}
      </div>
    </section>
  );
}

/* small helper: convert hex to rgba for subtle card tint */
function hexToRgba(hex, alpha = 0.1) {
  const h = hex.replace("#", "");
  const bigint = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
