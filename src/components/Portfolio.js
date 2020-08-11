import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Projects:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className=" portfolio-item" style={{ width: "45%", display:"inline-block", margin: 15}}>
                  <div className="item-wrap">
                    <a target="_blank" rel="noopener noreferrer"  href={`${item.url}`}>
                      <img src={`${item.imgurl}`} className="item-img" alt="" style={{height: 330, width: "100%"}}/>
                      
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <hr/>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}