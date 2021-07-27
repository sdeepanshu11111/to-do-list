import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

const FilterTask = ({ setStatus, status }) => {
  const statusHandler = (e) => {
    setStatus(e.target.innerText);
  };

  return (
    <div className="filterTask">
      <Link
        onClick={statusHandler}
        className={`filter ${status === "All tasks" ? "filterActive" : ""}`}
        to="/to-do-list"
      >
        <FontAwesomeIcon color="black" icon={faCaretRight} size="xs" />
        <h2 value="all">All tasks</h2>
      </Link>

      <Link
        onClick={statusHandler}
        className={`filter ${status === "completed" ? "filterActive" : ""}`}
        to="/to-do-list/completed"
      >
        <FontAwesomeIcon color="black" icon={faCaretRight} size="xs" />{" "}
        <h2>completed</h2>
      </Link>

      <Link
        onClick={statusHandler}
        className={`filter ${status === "pending" ? "filterActive" : ""}`}
        to="/to-do-list/pending"
      >
        <FontAwesomeIcon color="black" icon={faCaretRight} size="xs" />
        <h2>pending</h2>
      </Link>
    </div>
  );
};

export default FilterTask;
