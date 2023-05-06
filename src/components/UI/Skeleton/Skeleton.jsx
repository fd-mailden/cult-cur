import React from "react";
import ContentLoader from "react-content-loader";

function Skeleton(props) {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="73" y="4" rx="0" ry="0" width="221" height="183" />
      <rect x="74" y="227" rx="0" ry="0" width="217" height="25" />
      <rect x="232" y="260" rx="0" ry="0" width="14" height="1" />
      <rect x="77" y="200" rx="0" ry="0" width="87" height="19" />
      <rect x="77" y="263" rx="0" ry="0" width="223" height="59" />
      <rect x="124" y="335" rx="0" ry="0" width="118" height="19" />
    </ContentLoader>
  );
}
export { Skeleton };
