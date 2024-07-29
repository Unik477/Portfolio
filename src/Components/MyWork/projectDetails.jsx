import { useState } from "react";
import "./projectDetails.css";
import WorkCard from "./workCards";

export default function ProjectDetails() {
  const [web, setWeb] = useState(true);
  const [database, setDatabase] = useState(false);
  const [android, setAndroid] = useState(false);

  return (
    <div className="project-main">
      <div className="project-left-division">
        <ul>
          PROJECTS
          <li
            onClick={() => {
              setWeb(true);
              setDatabase(false);
              setAndroid(false)
            }}
          >
            Web Development
          </li>
          <li
            onClick={() => {
              setDatabase(true);
              setWeb(false);
              setAndroid(false)
            }}
          >
            DBMS Project
          </li>
          <li onClick={() => {
              setAndroid(true)
              setWeb(false);
              setDatabase(false);
            }}>Android Development</li>
        </ul>
      </div>

      <div className="project-right-division">
        {web && (
          <>
            <WorkCard
              image="/images/portfolioImage.png"
              heading="Portfolio Website:"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
            />
            <WorkCard
              image="/images/CarRental1.png"
              heading="Car Rental System (EZ Rentals)"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
            />
          </>
        )}

        {database && (
          <>
            <WorkCard
              image="/images/sqlImage.png"
              heading="SQL database  for WholeSale Management System"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
            />
          </>
        )}

        {android && (
          <>
            <WorkCard
              image="/images/kotlinImage.png"
              heading="Plant Information Application (FarmEasy)"
              headingContent="Detailed explanation of the process, technologies used, and challenges faced."
            />
          </>
        )}
      </div>
    </div>
  );
}
