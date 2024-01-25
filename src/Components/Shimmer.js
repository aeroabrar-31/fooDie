import { Divider, Skeleton } from "@mui/material";

const arr1 = new Array(10);
arr1.fill("abrar");

const arr2 = new Array(6);
arr2.fill("abrar");

const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-carousel">
        {arr2.map((ele, index) => {
          return (
            <Skeleton
              key={index}
              variant="circular"
              width={150}
              height={150}
              sx={{ marginLeft: "20px" }}
            ></Skeleton>
          );
        })}
      </div>
      <br></br>
      <Divider></Divider>
      <br />
      <div className="shimmer-input">
        <Skeleton
          variant="rectangular"
          height={30}
          sx={{ padding: "10px", marginTop: "10px" }}
        />
      </div>
      <div className="restro-cards">
        {arr1.map((ele, index) => {
          return (
            <Skeleton
              key={index}
              variant="rounded"
              width={250}
              height={350}
              sx={{ margin: "20px", padding: "10px" }}
            ></Skeleton>
          );
        })}
      </div>
    </div>
  );
};

export default Shimmer;
