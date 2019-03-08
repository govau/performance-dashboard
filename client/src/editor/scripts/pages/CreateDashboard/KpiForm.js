import React from 'react';
import PropTypes from 'prop-types';

export const getYears = startYear => {
  const currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1980;

  while (startYear <= currentYear) {
    years.push(startYear++);
  }

  return years;
};

const KpiForm = props => (
  <div>
    <strong>KPI DATA</strong>

    <br />

    <br />

    <div className="form-group">
      <label>Collection month</label>

      <div className="row">
        <div className="col-xs-12 col-lg-6">
          <select
            className="form-control"
            value={props.getValue('periodMonth')}
            onChange={props.getHandler('periodMonth')}
            required
          >
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>

        <div className="col-xs-12 col-lg-6">
          <select
            className="form-control"
            value={props.getValue('periodYear')}
            onChange={props.getHandler('periodYear')}
            required
          >
            {getYears(1950).map(year => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>

    <div className="form-group">
      <label>User satisfaction (%)</label>

      <input
        className="form-control"
        value={props.getValue('userSatisfaction')}
        onChange={props.getHandler('userSatisfaction')}
        type="number"
        min="0"
        max="100"
        step=".01"
      />
    </div>

    <div className="form-group">
      <label>Cost per transaction ($)</label>

      <input
        className="form-control"
        value={props.getValue('costPerTransaction')}
        onChange={props.getHandler('costPerTransaction')}
        type="number"
        min="0"
        max="1000000000"
        step=".01"
      />
    </div>

    <div className="form-group">
      <label>Digital take-up (%)</label>

      <input
        className="form-control"
        value={props.getValue('digitalTakeup')}
        onChange={props.getHandler('digitalTakeup')}
        type="number"
        min="0"
        max="100"
        step=".01"
      />
    </div>

    <div className="form-group">
      <label>Completion rate (%)</label>

      <input
        className="form-control"
        value={props.getValue('completionRate')}
        onChange={props.getHandler('completionRate')}
        min="0"
        max="100"
        step=".01"
      />
    </div>
  </div>
);

KpiForm.propTypes = {
  getValue: PropTypes.func.isRequired,
  getHandler: PropTypes.func.isRequired,
};

export default KpiForm;
