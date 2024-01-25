import { Divider, Skeleton } from "@mui/material";

export const MenuPageShimmer = () => {
  return (
    <div className="menu-page-shimmer-div">
      <div className="menu-page-shimmer-skeletons">
        <Skeleton
          variant="rounded"
          width="50%"
          height={180}
          sx={{ marginLeft: "25%", marginTop: "2%" }}
        ></Skeleton>

        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>

        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>

        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>

        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>
        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>
        <br></br>
        <Skeleton
          variant="rounded"
          width="50%"
          height={60}
          sx={{ marginLeft: "25%" }}
        ></Skeleton>
      </div>
    </div>
  );
};
