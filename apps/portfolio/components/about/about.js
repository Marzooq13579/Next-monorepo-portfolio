import React from 'react';
export default function About({resumeData}) {
    return (
      <section id="about">
         <div className="row">

            <div className="three-columns">

               <h2 className="about-me">About Me</h2>
               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <p>
               {
                 resumeData.aboutme
               }
               </p>
            </div>
         </div>
      </section>
    );
}