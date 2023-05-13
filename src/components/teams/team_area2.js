import React from "react";
// import team_data from "../../data/team-data";
import SingleTeam from "./single-team";
import team_data2 from "../../data/team-data2";

const TeamArea2 = () => {
  return (
    <section className="team-area section-py-80">
      <div className="container">
        <div
          className="team__grid-wrapper"
          data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -400; delay: anime.stagger(100);"
        >
          {team_data2.slice(0,5).map((item) => (
            <SingleTeam key={item.id} item={item} />
          ))}
          
        </div>
      </div>
    </section>
  )
}

export default TeamArea2;
