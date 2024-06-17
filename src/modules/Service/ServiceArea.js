import SingleCategory from "../../components/Service";
// import Services from "@/data/services";
import { useEffect,useState } from "react";
import axios from "axios";


export default function ServiceArea() {

  const [Degree, setDegree] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/v1/program/degrees`)
        .then((response) => {
            setDegree(response.data);
        })
}, [])
  return (
    <div className="it-category-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          {Degree.map((degree) => {
            return (
              <div key={degree.id} className="col-xl-3 col-lg-3 col-md-6 mb-30">
                <SingleCategory
                  Slug={degree.slug}
                  Icon="flaticon-study"
                  Title={degree.name}
                  courseCount={degree.coursesCount}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
