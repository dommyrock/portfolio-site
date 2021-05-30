export default function CompanyHeader(props) {
  return (
    <span>
      <img
        src="https://media-exp1.licdn.com/dms/image/C560BAQHgh8NxWVhSzg/company-logo_100_100/0/1579078366455?e=1630540800&v=beta&t=pLdddd7vyTszwrck2K49WN6I1-NiDtECLWMq-zQhzsg"
        alt="project preview"
        layout="fixed"
        width={56}
        height={56}
      />
      <h3>
        {props.company},{props.role}
      </h3>
      <h5>{props.location}</h5>
      <h5>{props.date}</h5>
    </span>
  );
}
//TODO style this headerr component to be nicer :)
