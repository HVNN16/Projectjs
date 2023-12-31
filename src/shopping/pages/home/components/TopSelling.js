// import React from "react";
// import { useSelector } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import { Col, Row, Skeleton } from "antd";
// import { getDataProductTopSelling } from "../../../reselect/reselect";
// import CardProduct from "./Card";
// import { helpers } from "../../../helpers/common";
// import { Link } from "react-router-dom";
// const TopSelling = () => {
//   const { TopSelling } = useSelector(
//     createStructuredSelector({
//       TopSelling: getDataProductTopSelling,
//     })
//   );
//   if (helpers.isEmptyObject(TopSelling)) {
//     return <Skeleton active />;
//   }
//   return (
//     <Row style={{ margin: "10px 0px" }}>
//       <Col span={24}>
//         <h3 style={{ textAlign: "center", fontSize: 25 }}> CORGI</h3>
//         <Row>
//           {TopSelling.map((item, key) => (
//             <React.Fragment key={"product" + item.id}>
//               {key < 4 && (
//                 <Col sm={12} md={6} xs={12}>
//                   <CardProduct data={item} />
//                 </Col>
//               )}
//             </React.Fragment>
//           ))}
//         </Row>
//         <Link to={`/category/corgi`}>
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
// export default React.memo(TopSelling);

import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Col, Row } from "antd";
import { getDataProductTopSelling } from "../../../reselect/reselect";
import CardProduct from "./Card";
import { Link } from "react-router-dom";

const TopSelling = () => {
  const { TopSelling } = useSelector(
    createStructuredSelector({
      TopSelling: getDataProductTopSelling,
    })
  );

  // You can remove the Skeleton loading component if not needed
  // if (helpers.isEmptyObject(TopSelling)) {
  //   return <Skeleton active />;
  // }

  return (
    <Row gutter={[16, 16]} style={{ margin: "10px 0" }}>
      <Col span={24}>
        <h3 style={{ textAlign: "center", fontSize: 25 }}> CORGI</h3>
        <Row gutter={[16, 16]}>
          {TopSelling.slice(0, 4).map((item, key) => (
            <Col key={item.id} sm={12} md={6} xs={12}>
              <CardProduct data={item} />
            </Col>
          ))}
        </Row>
        <Link to={`/category/corgi`}>
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

export default React.memo(TopSelling);

