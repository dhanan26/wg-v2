import programs from "./programs.json";
export const Temp = () => {
  console.log(programs);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "2rem" }}>
      {programs.data?.map((each, index) => {
        console.log(each.img);
        return (
          <div
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
  );
};
