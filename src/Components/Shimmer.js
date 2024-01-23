import { Skeleton } from "@mui/material";

const arr = new Array(10);
arr.fill("abrar");

const Shimmer = () => {
  return (
    <div className="shimmer">
      <div className="shimmer-input">
        <Skeleton
          variant="rectangular"
          height={30}
          sx={{ padding: "10px", marginTop: "10px" }}
        />
      </div>
      <div className="restro-cards">
        {console.log(arr)}
        {arr.map((ele, index) => {
          console.log(ele);
          return (
            <Skeleton
              key={index}
              variant="rounded"
              width={240}
              height={350}
              sx={{ margin: "15px", padding: "10px" }}
            ></Skeleton>
          );
        })}
      </div>
    </div>
  );
};

export default Shimmer;
