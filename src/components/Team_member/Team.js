import React, { useState, useEffect } from "react";

const Team = () => {
  let [team, setteam] = useState([]);
  let [baseUrl, setbaseUrl] = useState("");

  async function fetchData() {
    let result = await fetch("http://127.0.0.1:8000/api/team/teamapi");
    result = await result.json();
    setteam(result.teamData);
    setbaseUrl(result.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  //  console.log(team)
  
  return (
    <div className="row mt-4" id="team">
      <div>
        <h6 className="text-center text-danger">TEAM MEMBERS</h6>
        <h2 className="text-center text-dark">PEPPE’S PIZZA CREW</h2>
        <p className="text-center mb-5 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit
          arcu. adipiscing elit. Ut blandit arcu.
        </p>
      </div>
      {team.map((member, index) => (
        <div className="col-sm-3" key={member.fid}>
          <div className="card">
            <img
              src={baseUrl + member.file_url}
              className="card-img-top"
              alt="article"
            />
            <div className="card-body">
            {new Date(member.created_at).getUTCFullYear()}
              <h3 className="card-title">{member.name}</h3>
              <h5 className="card-text">{member.role}</h5>
              <a href={member.facebook_url} className="btn btn-primary">
                Facebook
              </a>
              <a href={member.insta_url} className="btn btn-primary">
                Instagram
              </a>
              <a href={member.twitter_url} className="btn btn-primary">
                Twitter
              </a>
            </div>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

export default Team;
