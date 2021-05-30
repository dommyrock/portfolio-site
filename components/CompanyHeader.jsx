import { forwardRef } from "react";

const CompanyHeader = forwardRef((props, ref) => {
  return (
    <div id="company-header" ref={ref}>
      <img src={props.logoSrc} alt="project preview" layout="fixed" width={56} height={56} />
      <span>
        <h3>
          {props.company}, {props.role}, {props.location}
        </h3>
        <h5>{props.date}</h5>
      </span>
    </div>
  );
});
export default CompanyHeader;
//forwared reff here so i have acces from index.js
