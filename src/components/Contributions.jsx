import { GitHubCalendar } from "react-github-calendar";

function Contributions(){
  return (
    <div className="contributions">
      <GitHubCalendar
        username="FoowsIsBack"
        colorScheme="dark"
        // showWeekdayLabels={true} //
      />
    </div>
  );
}

export default Contributions