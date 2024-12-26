import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Card, CardContent, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const ExperienceTimeline = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Addis Software",
      period: "06/2024 - 09/2024",
      achievements: [
        "Translated design prototypes into interactive interfaces for ERP modules like Employee, Payroll, Attendance, and Reports, improving task navigation efficiency by 20%",
        "Collaborated with back-end teams to design role-based workflows, including employee/admin authentication and data filtering, enhancing system usability",
        "Enhanced system performance by introducing lazy loading and UI optimizations, reducing page load time by 15% across key modules",
        "Optimized code quality through regular reviews and adherence to best practices",
        "Worked closely with the design team to ensure a consistent UI and UX, which strengthened my communication skills",
      ],
      icon: <WorkIcon />,
    },
    {
      role: "Full-Stack Developer",
      company: "EMSA ETHIOPIA",
      period: "03/2024 - 06/2024",
      achievements: [
        "Developed a responsive multi-page web app for Ethiopian Medical Student Association (EMSA) with a focus on improving branding & user engagement",
        "Developed a digital certificate feature that allows students to receive certifications electronically, reducing manual certificate processing time by 40%",
        "Integrated SEO best practices which result 15% faster page load times and improved search engine rankings",
      ],
      icon: <CodeIcon />,
    },
    {
      role: "Web Application Developer",
      company: "Mahibere Kidusan (Ethio MK)",
      period: "Present",
      achievements: [
        "Developing a dynamic registration system for new members to explore and join different sections of the Ethiopian Orthodox Christians Association, aiming to increase membership sign-ups by 20%",
        "Building a ticket management feature to track spiritual trip bookings, enhancing event planning",
      ],
      icon: <DeveloperModeIcon />,
    },
  ];

  return (
    <div className="experience">
      <div className="pros-title">
        <h1>|</h1>
        <h3>Real World Experiences</h3>
        <hr />
      </div>

      <Timeline
        sx={{
          "& .MuiPaper-root, MuiTypography-root": {
            boxShadow: "2px 2px 6px 1px #00000040",
            backgroundColor: "#212b39",
            borderBottom: "2px solid rgba(22, 192, 240, 0.65)",
            borderRadius: 1,
            transition: "all 0.3s",
          },
          "& .MuiTimelineItem-root:hover .MuiPaper-root": {
            transform: "translateY(-5px) !important",
            transition: "all 0.3s !important",
            borderBottom: "2px solid rgb(22, 192, 240)",
            boxShadow: "0px 8px 14px rgba(0, 0, 0, 0.51)",
          },
          "& .MuiTimelineItem-root:hover .MuiTimelineDot-root": {
            backgroundColor: "aqua",
            transition: "background-color 0.5s",
          },
          "& .MuiTimelineItem-root:hover .MuiTimelineDot-root svg": {
            color: "black",
            transition: "color 0.5s",
          },
        }}
        id="experience"
        position="alternate"
      >
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{
                color: "inherit",
                alignContent: "center",
                display: index !== 1 ? "flex" : "initial",
                alignItems: index !== 1 ? "center" : "initial",
                justifyContent: index !== 1 ? "right" : "initial",
                "& p": {
                  maxWidth: index === 1 ? "max-content" : "initial",
                },
              }}
              color="text.secondary"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  maxWidth: "max-content",
                  padding: "10px 20px",
                  backgroundColor: "#212b39",
                  borderRadius: "5px",
                }}
              >
                <CalendarMonthOutlinedIcon
                  className="calendar-icon"
                  sx={{
                    marginRight: "0.5rem",
                    verticalAlign: "middle",
                  }}
                />
                <p
                  style={{
                    margin: "0",
                    fontSize: "1.2rem",
                    lineHeight: "normal",
                  }}
                >
                  {exp.period}
                </p>
              </div>
            </TimelineOppositeContent>
            <TimelineSeparator sx={{ margin: "0 3rem" }}>
              <TimelineDot
                color="primary"
                variant="outlined"
                style={{
                  width: "38px",
                  height: "38px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    margin: "auto",
                  }}
                >
                  {exp.icon}
                </div>
              </TimelineDot>
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ mb: 2 }}>
                <CardContent
                  sx={{
                    "& > *, .MuiTypography-root": {
                      color: "#ccd6f6",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    color="primary"
                    fontWeight="900"
                  >
                    {exp.role}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {exp.company}
                  </Typography>
                  <ul
                    style={{
                      paddingLeft: "1rem",
                      margin: "0.5rem 0",
                      direction: index === 1 ? "rtl" : "ltr",
                      textAlign: index === 1 ? "right" : "left",
                      paddingRight: index === 1 ? "1rem" : "0",
                    }}
                  >
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ listStyleType: "disc" }}>
                        <Typography variant="body2" color="text.secondary">
                          {achievement}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default ExperienceTimeline;
