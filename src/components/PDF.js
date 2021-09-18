import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {
  return (
    <>
      <div className="Post" ref={ref}>
        <h1>{props.TicketNo}</h1>
        {/* <img src={props.image} alt={props.title} /> */}
        <p>{props.TicketSubject}</p>
        <p>{props.TicketSubject}</p>
        <p>{props.TicketDesc}</p>
        <p>{props.TicketUrl}</p>
        <img src={props.image} alt={props.TicketNo} />
        {/* <p>{props.ImageAttached}</p> */}
        {/* <img src={props.ImageAttached} alt="Not Found" /> */}
        <p>{props.TicketNotes}</p>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </>
  );
}

export default PDF;