import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  months,
  charts,
  units,
  intervals,
  getOptions,
} from '../../constants/options';

export default class CreateChart extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    description: '',
    type: '',
    units: '',
    interval: '',
    periodMonth: `0${new Date().getMonth() + 1}`.slice(-2),
    periodYear: new Date().getFullYear(),
    firstLabel: '',
    datasets: [],
    datasetName: '',
    datasetLabel: '',
    datasetNotes: '',
    datasetUnits: '',
    datasetValue: '',
  };

  getYears = startYear => {
    const currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;

    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    return years;
  };

  handleInput = key => event => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleFormSubmission = event => {
    event.preventDefault();

    const {
      name,
      description,
      type,
      periodYear,
      periodMonth,
      datasets,
      interval,
      firstLabel,
      units,
    } = this.state;

    if (name === '' || units === '' || description === '' || type === '') {
      alert('Please add name, units, description & type');
      return;
    }

    if (interval === 'custom' && firstLabel === '') {
      alert('Please enter First category label');
      return;
    }

    if (interval === 'month' && (periodYear === '' || periodMonth === '')) {
      alert('Please enter a Start month');
      return;
    }

    if (datasets.length === 0) {
      alert('Please add at least one dataset');
      return;
    }

    let year = periodYear;
    let month = periodMonth;

    if (interval === 'custom') {
      year = '1970';
      month = '01';
    }

    this.props.onSubmit({
      name,
      description,
      type,
      period: `${year}-${month}-01`,
      interval,
      datasets,
      label: firstLabel,
      units,
    });
  };

  handleAddDataset = event => {
    event.preventDefault();
    const name = this.state.datasetName;
    // const label = this.state.datasetLabel;
    // const notes = this.state.datasetNotes;
    // const units = this.state.datasetUnits;
    const value = this.state.datasetValue;

    if (name === '' || value === '') {
      return;
    }

    this.setState({
      datasets: [
        ...this.state.datasets,
        {
          name,
          label: name,
          // notes,
          // units,
          value,
          time: new Date().toString().split(' ')[4],
        },
      ],
      datasetName: '',
      datasetLabel: '',
      datasetNotes: '',
      datasetUnits: '',
      datasetValue: '',
    });
  };

  handleRemoveDataset = time => {
    this.setState({
      datasets: this.state.datasets.filter(dataset => dataset.time !== time),
    });
  };

  getFirstValueLabel = () => {
    const { state } = this;

    if (!state.interval) {
      return '';
    }

    if (state.interval === 'custom') {
      if (!state.firstLabel) {
        return '';
      }

      return ` (${state.firstLabel})`;
    }

    if (state.interval === 'month') {
      return ` (${state.periodMonth}/${state.periodYear})`;
    }

    return '';
  };

  render = () => (
    <div
      style={{
        paddingTop: '24px',
        marginBottom: '24px',
      }}
      className="container"
    >
      <form onSubmit={this.handleFormSubmission}>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <div className="form-group">
              <label>Name</label>

              <input
                className="form-control"
                value={this.state.name}
                onChange={this.handleInput('name')}
                required
              />
            </div>
          </div>

          <div className="col-xs-12 col-lg-6">
            <div className="form-group">
              <label>Type</label>

              <select
                className="form-control"
                value={this.state.type}
                onChange={this.handleInput('type')}
                required
              >
                {getOptions(charts)}
              </select>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>

          <input
            className="form-control"
            value={this.state.description}
            onChange={this.handleInput('description')}
            required
          />
        </div>

        <div className="form-group">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
              <label>Interval</label>

              <select
                className="form-control"
                value={this.state.interval}
                onChange={this.handleInput('interval')}
                required
              >
                {getOptions(intervals)}
              </select>
            </div>

            <div className="col-xs-12 col-lg-6">
              <label>Units</label>

              <select
                className="form-control"
                value={this.state.units}
                onChange={this.handleInput('units')}
              >
                {getOptions(units)}
              </select>
            </div>
          </div>
        </div>

        {this.state.interval === 'month' && (
          <div className="form-group">
            <label>Start month</label>

            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <select
                  className="form-control"
                  value={this.state.periodMonth}
                  onChange={this.handleInput('periodMonth')}
                  required
                >
                  {getOptions(months)}
                </select>
              </div>

              <div className="col-xs-12 col-lg-6">
                <select
                  className="form-control"
                  value={this.state.periodYear}
                  onChange={this.handleInput('periodYear')}
                  required
                >
                  <option key="" value="">
                    Select
                  </option>

                  {this.getYears('1950').map(year => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {this.state.interval === 'custom' && (
          <div className="form-group">
            <label>First category label</label>

            <input
              className="form-control"
              value={this.state.firstLabel}
              onChange={this.handleInput('firstLabel')}
              required
            />
          </div>
        )}

        <br />

        <label>Datasets</label>

        <div style={{ backgroundColor: '#fff', padding: '24px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th>Name</th>

                {/* <th>Label</th> */}

                {/* <th>Notes</th> */}

                {/* <th>Units</th> */}

                <th>First value{this.getFirstValueLabel()}</th>

                <th />
              </tr>
            </thead>

            <tbody>
              {this.state.datasets.map(dataset => (
                <tr key={dataset.time}>
                  <td>{dataset.name}</td>

                  {/* <td>{dataset.label}</td> */}

                  {/* <td>{dataset.notes}</td> */}

                  {/* <td>{dataset.units}</td> */}

                  <td>{dataset.value}</td>

                  <td>
                    <a
                      onClick={event => {
                        event.preventDefault();
                        this.handleRemoveDataset(dataset.time);
                      }}
                      className="UIK-link"
                    >
                      Remove
                    </a>
                  </td>
                </tr>
              ))}

              <tr>
                <td>
                  <input
                    className="form-control"
                    value={this.state.datasetName}
                    onChange={this.handleInput('datasetName')}
                  />
                </td>

                {/* <td>
                  <input
                    className="form-control"
                    value={this.state.datasetLabel}
                    onChange={this.handleInput('datasetLabel')}
                  />
                </td> */}

                {/* <td>
                  <input
                    className="form-control"
                    value={this.state.datasetNotes}
                    onChange={this.handleInput('datasetNotes')}
                  />
                </td> */}

                {/* <td>
                  <select
                    className="form-control"
                    value={this.state.datasetUnits}
                    onChange={this.handleInput('datasetUnits')}
                  >
                    {getOptions(units)}
                  </select>
                </td> */}

                <td>
                  <input
                    className="form-control"
                    value={this.state.datasetValue}
                    onChange={this.handleInput('datasetValue')}
                    type="number"
                  />
                </td>

                <td>
                  <a onClick={this.handleAddDataset} className="UIK-link">
                    Add
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <br />

        <input type="submit" value="Create chart" className="btn btn-primary" />
      </form>
    </div>
  );
}
