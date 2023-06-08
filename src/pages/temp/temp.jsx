import { useNavigate } from "react-router-dom";
import programs from "./programs.json";
export const Temp = () => {
  const navigate = useNavigate();
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Most Popular packages</h1>
      <div style={{ display: "flex", flexWrap: "nowrap", gap: "1rem", overflowX: 'scroll' }}>
        {programs?.map((each, index) => {
          return (
            <div
              onClick={() => {
                navigate(`/?id=${each?._id}&approach_id=${each?.approachType[0]?._id}`);
              }}
              style={{
                minHeight: 300,
                minWidth: 200,
                borderRadius: 10,
                background: `url("${each.img}") center no-repeat`,
                backgroundSize: "contain",
                padding: "1rem",
                fontSize: 20,
                fontWeight: 500,
                "& :hover": {
                  height: 350,
                  width: 250,
                },
              }}
              key={index}
            >
              {each.name}
            </div>
          );
        })}
      </div>
      <h1>Packages</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: 'space-evenly',  }}>
        {programs?.map((each, index) => {
          return (
            <div
              onClick={() => {
                console.log("clicked", each._id);
                navigate(`/?id=${each._id}`);
              }}
              style={{
                height: 300,
                width: 200,
                borderRadius: 10,
                background: `url("${each.img}") center no-repeat`,
                backgroundSize: "contain",
                padding: "1rem",
                fontSize: 20,
                fontWeight: 500,
                "& :hover": {
                  height: 350,
                  width: 250,
                },
              }}
              key={index}
            >
              {each.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
