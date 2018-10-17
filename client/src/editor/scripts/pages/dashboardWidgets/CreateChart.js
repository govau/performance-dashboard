import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateChart extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    description: '',
    type: '',
    periodMonth: `0${new Date().getMonth() + 1}`.slice(-2),
    periodYear: (new Date()).getFullYear(),
    datasets: [],
    datasetName: '',
    datasetLabel: '',
    datasetNotes: '',
    datasetUnits: '',
    datasetValue: '',
  };

  getYears = (startYear) => {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;

    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    return years;
  };

  handleInput = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  handleFormSubmission = (event) => {
    event.preventDefault();
    const { name, description, type, periodYear, periodMonth, datasets } = this.state;

    if (
      name === ''
      || description === ''
      || type === ''
      || periodYear === ''
      || periodMonth === ''
      || datasets.length === 0) {
      alert('Please fill in all fields');
      return;
    }

    this.props.onSubmit({
      name,
      description,
      type,
      period: `${periodYear}-${periodMonth}-01`,
      datasets,
    });
  };

  handleAddDataset = (event) => {
    event.preventDefault();
    const name = this.state.datasetName;
    const label = this.state.datasetLabel;
    const notes = this.state.datasetNotes;
    const units = this.state.datasetUnits;
    const value = this.state.datasetValue;

    if (name === '' || units === '' || label === '' || value === '') {
      return;
    }

    this.setState({
      datasets: [
        ...this.state.datasets, {
          name,
          label,
          notes,
          units,
          value,
          time: new Date().toString().split(" ")[4],
        },
      ],
      datasetName: '',
      datasetLabel: '',
      datasetNotes: '',
      datasetUnits: '',
      datasetValue: '',
    });
  };

  handleRemoveDataset = (time) => {
    this.setState({
      datasets: this.state.datasets.filter(dataset => dataset.time !== time),
    });
  };

  render() {
    return (
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
                  <option value="">Select</option>
                  <option value="bar">Bar chart</option>
                  <option value="line">Line chart</option>
                  <option value="sparkline">Sparkline chart</option>
                  <option value="pie">Pie chart</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Collection month</label>

            <div className="row">
              <div className="col-xs-12 col-lg-6">
                <select
                  className="form-control"
                  value={this.state.periodMonth}
                  onChange={this.handleInput('periodMonth')}
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
                  value={this.state.periodYear}
                  onChange={this.handleInput('periodYear')}
                  required
                >
                  {this.getYears('1950').map(year => (
                    <option
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
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

          <br />

          <label>Datasets</label>

          <div
            style={{ backgroundColor: '#fff', padding: '24px' }}
          >
            <table style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>Name</th>

                  <th>Label</th>

                  <th>Notes</th>

                  <th>Units</th>

                  <th>First value</th>

                  <th />
                </tr>
              </thead>

              <tbody>
                {this.state.datasets.map(dataset => (
                  <tr key={dataset.time}>
                    <td>{dataset.name}</td>

                    <td>{dataset.label}</td>

                    <td>{dataset.notes}</td>

                    <td>{dataset.units}</td>

                    <td>{dataset.value}</td>

                    <td>
                      <a
                        onClick={(event) => { event.preventDefault(); this.handleRemoveDataset(dataset.time); }}
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

                  <td>
                    <input
                      className="form-control"
                      value={this.state.datasetLabel}
                      onChange={this.handleInput('datasetLabel')}
                    />
                  </td>

                  <td>
                    <input
                      className="form-control"
                      value={this.state.datasetNotes}
                      onChange={this.handleInput('datasetNotes')}
                    />
                  </td>

                  <td>
                    <select
                      className="form-control"
                      value={this.state.datasetUnits}
                      onChange={this.handleInput('datasetUnits')}
                    >
                      <option value="">Select</option>
                      <option value="n">Number</option>
                      <option value="%">Percentage</option>
                      <option value="$">Dollars</option>
                    </select>
                  </td>

                  <td>
                    <input
                      className="form-control"
                      value={this.state.datasetValue}
                      onChange={this.handleInput('datasetValue')}
                      type="number"
                    />
                  </td>

                  <td>
                    <a
                      onClick={this.handleAddDataset}
                      className="UIK-link"
                    >
                      Add
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <br />

          <br />

          <input
            type="submit"
            value="Create chart"
            className="btn btn-primary"
          />
        </form>
      </div>
    );
  }
}
