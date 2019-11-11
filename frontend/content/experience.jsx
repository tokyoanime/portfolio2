import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <div className="heading">
        Where I've Worked
      </div>
      <div className="experience-container">
        <div className="companies">
          <ul className="companies-list">

          </ul>
        </div>
        <div className="job-container">
          <div className="job0">
            <div className="job-title">
              <span>Sales Account Manager</span>
              <span><i class="material-icons">more_vert</i></span>
              <span>
                <a href="http://www.antec.com/"
                  target="_blank"
                  rel="noopener noreferrer">Antec, Inc.
                </a>
              </span>
            </div>
            <div className="job-detail">
              <span>Mar 2017 - Apr 2019</span>
            </div>
            <div className="job-description">
              <ul className="job-description-list">
                <li>Increased sales by approximately 10% by utilizing sales and marketing promotion available through our distributors</li>
                <li>Maintained effective communication between internal supply chain management and distributors to ensure that the products were delivered on time and accurately</li>
                <li>Patiently taught my colleagues all my previous responsibilities when I was promoted from accounts receivable/accounts payable position to sales account manager position</li>
              </ul>
            </div>
          </div>
          <div className="job1">
            <div className="job-title">
              <span>Assistant Manager</span>
              <span><i class="material-icons">more_vert</i></span>
              <span>Discount Bay/Surplus Town</span>
            </div>
            <div className="job-detail">
              <span>Dec 2012 - Mar 2017</span>
            </div>
            <div className="job-description">
              <ul className="job-description-list">
                <li>Managed 10 employees across multiple departments, including sales, customer service, IT and marketing</li>
                <li>Interviewed, hired, trained and managed new employees</li>
                <li>Doubled productivity by utilizing Excel to prepopulate product data and importing to POS system instead of manually entering them</li>
                <li>Utilized multiple sales channels to significantly increase online sales</li>
              </ul>
            </div>
          </div>
          <div className="job2">
            <div className="job-title">
              <span>Sales Associate</span>
              <span><i class="material-icons">more_vert</i></span>
              <span>
                <a href="https://www.frys.com/"
                  target="_blank"
                  rel="noopener noreferrer">Fry's Electronics
                </a>
              </span>
            </div>
            <div className="job-detail">
              <span>Oct 2006 - Oct 2008</span>
            </div>
            <div className="job-description">
              <ul className="job-description-list">
                <li>Assisted customers with finding the right product solution that matches their need</li>
                <li>Promoted other related products, such as, extended warranties, Fry's Card, and in-home installations</li>
                <li>Worked with other co-workers to ensure quality customer service</li>
                <li>Met weekly sales quota despite of slowing economy</li>
                <li>Managed and maintained an assigned product display and inventory</li>
                <li>Train new employees with Fry’s POS system and schematic of product they are in charge of</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience;