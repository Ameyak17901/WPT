import { useState } from "react";
import EducationDetails from "./EducationDetails";

export default function StudentData() {
  let [flag, setFlag] = useState(false);

  let handler = (e) => {
    setFlag(e.target.checked);
  };
  return (
    <div>
      <p>Name: Ameya </p>
      <p>age: 22 </p>
      <p>city: pune </p>
      <label>
        Education details <input type="checkbox" id="edu" onClick={handler} />
        {flag ? <EducationDetails /> : ""}
      </label>
    </div>
  );
}
