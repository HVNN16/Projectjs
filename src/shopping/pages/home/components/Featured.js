// import React from "react";
// import { useSelector } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { Col, Row, Skeleton } from "antd";
// import { getDataProductFeautured } from "../../../reselect/reselect";
// import CardProduct from "./Card";
// import { helpers } from "../../../helpers/common";
// import { Link } from "react-router-dom";
// const FeatureComponent = () => {
//   const { featured } = useSelector(
//     createStructuredSelector({
//       featured: getDataProductFeautured,
//     })
//   );
//   if (helpers.isEmptyObject(featured)) {
//     return <Skeleton active />;
//   }
//   return (
//     <Row style={{ margin: "30px 0px" }}>
//       <Col span={24}>
//         <h3 style={{ textAlign: "center", fontSize: 25 }}> HUSKY</h3>
//         <Row>
//           {featured.map((item, key) => (
//             <React.Fragment key={"product" + item.id}>
//               {key < 4 && (
//                 <Col sm={12} md={6} xs={12}>
//                   <CardProduct data={item} />
//                 </Col>
//               )}
//             </React.Fragment>
//           ))}
//         </Row>
//         <Link to={`/category/husky`}>
//           <h5
//             style={{
//               textAlign: "center",
//               color: "green",
//               marginTop: "10px",
//               fontSize: "15px",
//             }}
//           >
//             Xem Thêm
//           </h5>
//         </Link>
//       </Col>
//     </Row>
//   );
// };
// export default React.memo(FeatureComponent);

import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row } from "antd";
import { getDataProductFeautured } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { Link } from "react-router-dom";

const FeatureComponent = () => {
  const { featured } = useSelector(
    createStructuredSelector({
      featured: getDataProductFeautured,
    })
  );

  // You can remove the Skeleton loading component if not needed
  // if (helpers.isEmptyObject(featured)) {
  //   return <Skeleton active />;
  // }

  return (
    <Row gutter={[16, 16]} style={{ margin: "30px 0" }}>
      <Col span={24}>
        <h3 style={{ textAlign: "center", fontSize: 25 }}> HUSKY</h3>
        <Row gutter={[16, 16]}>
          {featured.slice(0, 4).map((item) => (
            <Col key={item.id} sm={12} md={6} xs={12}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
        <Link to={`/category/husky`}>
          <h5
            style={{
              textAlign: "center",
              color: "green",
              marginTop: "10px",
              fontSize: "15px",
            }}
          >
            Xem Thêm
          </h5>
        </Link>
      </Col>
    </Row>
  );
};

export default React.memo(FeatureComponent);

