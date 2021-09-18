import React, { Component, useState } from "react";
import PDF from "./PDF";

const Post = () => {

    const [ticketno, setticketno] = useState("");
    const [ticketSub, setticketSub] = useState("");
    const [ticketDesc, setticketDesc] = useState("");
    const [ticketurl, setticketurl] = useState("");
    // const [ImageAttach, setImageAttach] = useState(null);
    const [techNotes, settechNotes] = useState("");

    const [postSubmitted, setpostSubmitted] = useState(false);


    const allInputs = { imgUrl: "" };
    const [ImageAttach, setImageAttach] = useState("");
console.log(ticketno);


//    onChange = (input) => (e) => {
//      this.setState({
//        [input]: e.target.value,
//      });
//    };
//    const handleImageAsFile = (e) => {
//      const image = e.target.file[0];
//      setImageAttach(e.target.file);
     console.log("ImageAttach", ImageAttach);
//    };


   const sunmitPost = (e) => {
     if (!ticketno || !ticketSub || !ticketDesc || !ticketurl || !ImageAttach || !techNotes) {
       alert("All fields are required!");
       e.preventDefault();
     } else {
      setpostSubmitted(true);
     }
   };
   return (
     <>
       {!postSubmitted ? (
         <div className="container">
           <div className="jumbotron mt-3">
             <div className="row">
               <div className="col-md-12">
                 <div className="well well-sm">
                   <form className="form-horizontal" method="post">
                     <fieldset>
                       <legend className="text-center header">
                         Add Ticket Info
                       </legend>
                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-user bigicon"></i>
                         </span>
                         <input
                           //    onChange={this.onChange("title")}
                           name="title"
                           type="text"
                           placeholder="Ticket #"
                           className="form-control"
                           onChange={(e) => setticketno(e.target.value)}
                         />
                       </div>
                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-user bigicon"></i>
                         </span>
                         <input
                           //    onChange={this.onChange("image")}
                           name="image"
                           type="text"
                           placeholder="Ticket Subject"
                           className="form-control"
                           onChange={(e) => setticketSub(e.target.value)}
                         />
                       </div>
                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-pencil-square-o bigicon"></i>
                         </span>
                         <textarea
                           //    onChange={this.onChange("content")}
                           className="form-control"
                           name="content"
                           placeholder="Description"
                           rows="7"
                           onChange={(e) => setticketDesc(e.target.value)}
                         ></textarea>
                       </div>

                       {/* 
                       //////////////////////////////////////////////// */}
                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-user bigicon"></i>
                         </span>
                         <input
                           //    onChange={this.onChange("image")}
                           name="image"
                           type="text"
                           placeholder="Ticket Url"
                           className="form-control"
                           onChange={(e) => setticketurl(e.target.value)}
                         />
                       </div>

                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-user bigicon"></i>
                         </span>
                         <input
                           //    onChange={this.onChange("image")}
                           name="image"
                           type="file"
                           placeholder="Design Attached"
                           className="form-control"
                           //    onChange={handleImageAsFile}
                           //    onChange = {setFile([...e.target.files])};
                           onChange={(e) =>
                             setImageAttach(e.target.files[0].name)
                           }
                         />
                       </div>

                       <div className="form-group">
                         <span className="col-md-1 col-md-offset-2 text-center">
                           <i className="fa fa-pencil-square-o bigicon"></i>
                         </span>
                         <textarea
                           //    onChange={this.onChange("content")}
                           className="form-control"
                           name="content"
                           placeholder="Technical Notes"
                           rows="7"
                           onChange={(e) => settechNotes(e.target.value)}
                         ></textarea>
                       </div>
                       <div className="form-group">
                         <button
                           type="button"
                           onClick={sunmitPost}
                           className="btn btn-primary btn-lg"
                         >
                           Submit
                         </button>
                       </div>
                     </fieldset>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       ) : (
         <PDF
           TicketNo={ticketno}
           TicketSubject={ticketSub}
           TicketDesc={ticketDesc}
           TicketUrl={ticketurl}
           image={ImageAttach}
           TicketNotes={techNotes}
         />
       )}
     </>
   );
};

export default Post;
