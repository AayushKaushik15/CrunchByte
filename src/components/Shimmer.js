


import { ShimmerPostList, ShimmerSectionHeader } from "react-shimmer-effects";

const Shimmer = () => {
  return (
    <div>
      <div className="shimmer-ui">
        <ShimmerSectionHeader/>
        <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={10} gap={30} />;
      </div>
    </div>
  );
};


export default Shimmer;