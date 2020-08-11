import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
         <div className="row education">

<div className="three columns header-col">
   <h1><span>Resume</span></h1>
</div>

<div className="nine columns main-col">
        <div className="row item">
           <div className="twelve columns">
              <a target="_blank" rel="noopener noreferrer"href="https://drive.google.com/file/d/1LrRUw0l7iP6yvI9tMBl3KEuFAiNLHEvX/view?usp=sharing">.PDF</a>
              
           </div>
        </div>
</div>
</div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <p style={{fontSize: 20}}>
              {resumeData.skillsDescription}
            </p>

            <div className="">

              <ul className="skills">

                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                        <span className={`${item.skillIcon}`}>
                        </span><em>   {item.skillname}</em>
                      </li>
                    )
                  })
               }

        </ul>

          </div>

        </div>

      </div>

       
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                       <br/>
                          {item.Achievements2}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">

              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>



      </section>
    );
  }
}