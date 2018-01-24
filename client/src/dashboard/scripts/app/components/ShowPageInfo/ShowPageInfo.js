import React from 'react';

const ShowPageInfo = () => (
  <div className="below-the-line-bg">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="D_widget-card widget dashboard-information">
            <div className="row">
              <div className="col-xs-12 col-lg-7">
                <div className=" widget-text">
                  <div className="widget-text__inner">
                    <div className="widget__title">
                      <h4>Dashboard Information</h4>
                    </div>

                    <div id="dashboard-notes" className="widget__body">
                      <dl>
                        <dt>Where is this information from?</dt>
                        <dd>Department of Immigration and Border Protection.</dd>
                        <dt>What is Australian Citizenship Appointment Booking Service?</dt>
                        <dd>The Australian Citizenship Appointment Booking Service makes it quicker, easier and more convenient for users to reschedule a citizenship test appointment. Prior to the introduction of the online service, users were only able to change their appointment by calling the Department. The public beta release of the service is currently available in Melbourne, Victoria.</dd>
                        <dt>User satisfaction</dt>
                        <dd>User satisfaction measures the percentage of users who responded "satisfied" and "very satisfied" with the appointment booking service using the feedback kiosks located in the Department’s citizenship areas.</dd>
                        <dt>Cost per transaction</dt>
                        <dd>This data is not available.</dd>
                        <dt>Digital take-up</dt>
                        <dd>Digital take-up measures the number of users who had an appointment booked using the new service as a percentage of all appointments that have been made Australia-wide.</dd>
                        <dt>Completion rate</dt>
                        <dd>Completion rate measures the number of users who were able to use the digital service without having to contact the Department for assistance when rescheduling their appointment.</dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-lg-5">
                <div className="widget-text__footer">
                  <ul>
                    <li>
                      <a href="https://www.border.gov.au/" target="_blank" className="link--external-alt"> Visit https://www.border.gov.au/</a>
                    </li>

                    <li>
                      <a className="link--external-alt" href="/dashboards/2-australian-citizenship-appointment-booking-service/export.csv">
                        Download dashboard data as CSV
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ShowPageInfo;
