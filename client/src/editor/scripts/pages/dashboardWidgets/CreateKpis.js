import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KpiForm from '../CreateDashboard/KpiForm';

export default class CreateKpis extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    userSatisfaction: '',
    costPerTransaction: '',
    digitalTakeup: '',
    completionRate: '',
    periodMonth: `0${new Date().getMonth() + 1}`.slice(-2),
    periodYear: (new Date()).getFullYear(),
  };

  handleInput = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  kpiFormValue = field => this.state[field];

  kpiFormHandler = field => this.handleInput(field);

  handleFormSubmission = (event) => {
    event.preventDefault();

    const {
      digitalTakeup,
      completionRate,
      userSatisfaction,
      costPerTransaction,
      periodYear,
      periodMonth,
    } = this.state;

    if (periodYear === '' || periodMonth === '') {
      alert('Please select month and year');
      return;
    }

    this.props.onSubmit({
      digitalTakeup,
      completionRate,
      userSatisfaction,
      costPerTransaction,
      period: `${periodYear}-${periodMonth}-01`,
    });
  };

  render = props => (
    <div
      style={{
        paddingTop: '24px',
        marginBottom: '24px',
      }}
      className="container"
    >
      <form onSubmit={this.handleFormSubmission}>
        <KpiForm
          getValue={this.kpiFormValue}
          getHandler={this.kpiFormHandler}
        />

        <br />

        <br />

        <input
          type="submit"
          value="Add KPIs"
          className="btn btn-primary"
        />
      </form>
    </div>
  );
}
