import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getServiceDashboardUrl } from './../../utils/formatUrl';
import PropTypes from 'prop-types';
import Breadcrumbs from 'shared/components/uikit-breadcrumbs';
import { initialiseDashboard, createDashboard } from 'shared/redux/dashboards/dashboardsActions';
import { createWidget } from 'shared/redux/widgets/widgetsActions';
import style from './CreateDashboard.scss';

class CreateDashboard extends Component {
  state = {
    name: '',
    description: '',
    url: '',
    targetUsers: '',
    organisationId: '',
    noteTitle: '',
    noteBody: '',
    notes: [],
    processing: false,
    userSatisfaction: '',
    costPerTransaction: '',
    digitalTakeup: '',
    completionRate: '',
    periodMonth: `0${new Date().getMonth() + 1}`.slice(-2),
    periodYear: (new Date()).getFullYear(),
  };

  static get contextTypes() {
    return {
      router: React.PropTypes.object.isRequired,
    };
  }

  addNote = (event) => {
    event.preventDefault();
    const title = this.state.noteTitle;
    const body = this.state.noteBody;

    if (title === '' || body === '') {
      return false;
    }

    this.setState({
      notes: [
        ...this.state.notes, {
          title,
          body,
          time: new Date().toString().split(" ")[4],
        },
      ],
      noteTitle: '',
      noteBody: '',
    });
  };

  removeNote = (time) => {
    this.setState({
      notes: this.state.notes.filter(note => note.time !== time),
    });
  };

  handleInput = (key) => (event) => {
    this.setState({
      [key]: event.target.value,
    });
  };

  getYears = (startYear) => {
    const currentYear = new Date().getFullYear(), years = [];
    startYear = startYear || 1980;

    while (startYear <= currentYear) {
      years.push(startYear++);
    }

    return years;
  };

  handleFormSubmission = (event) => {
    event.preventDefault();

    const {
      name,
      description,
      organisationId,
      userSatisfaction,
      costPerTransaction,
      digitalTakeup,
      completionRate,
    } = this.state;

    if (name === '' || description === '' || organisationId === '') {
      alert('Please fill in more fields');
      return;
    }

    if (`${userSatisfaction}${costPerTransaction}${digitalTakeup}${completionRate}` === '') {
      alert('Please fill in more fields');
      return;
    }

    this.setState({
      processing: true,
    });

    this.props.initialiseDashboard({
      formData: {
        name: this.state.name,
        description: this.state.description,
        target_users: this.state.targetUsers,
        organisation_id: this.state.organisationId,
        url: this.state.url,
        notes: this.state.notes,
        userSatisfaction: this.state.userSatisfaction,
        costPerTransaction: this.state.costPerTransaction,
        digitalTakeup: this.state.digitalTakeup,
        completionRate: this.state.completionRate,
        periodMonth: this.state.periodMonth,
        periodYear: this.state.periodYear.toString(),
      },
    }).then((dashboard) => {
      console.log(`Dashboard initialised, redirecting: ${dashboard.id}`);
      window.location = getServiceDashboardUrl(dashboard.id, dashboard.name);
    });
  };

  render = () => {
    const breadcrumbPaths = [
      { path: '/', name: 'Manage dashboards' },
      { path: '/create', name: 'Create dashboard' },
    ];

    return (
      <div>
        <div className="page__header">
          <div className="container">
            <Breadcrumbs paths={breadcrumbPaths} />

            <h1 className="h3">Create dashboard</h1>
          </div>
        </div>

        <div className="page__body">
          <div className="container">
            <div className="row">
              <form onSubmit={this.handleFormSubmission}>
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

                  <div className="form-group">
                    <label>Organisation</label>

                    <select
                      className="form-control"
                      value={this.state.organisationId}
                      onChange={this.handleInput('organisationId')}
                      required
                    >
                      <option value="">Select</option>

                      {this.props.organisations.map(o => (
                        <option
                          key={o.id}
                          value={o.id}
                        >
                          {o.name}
                        </option>
                      ))}
                    </select>
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
                    <label>URL</label>

                    <input
                      className="form-control"
                      value={this.state.url}
                      onChange={this.handleInput('url')}
                    />
                  </div>

                  <div className="form-group">
                    <label>Target users</label>

                    <input
                      className="form-control"
                      value={this.state.targetUsers}
                      onChange={this.handleInput('targetUsers')}
                      required
                    />
                  </div>

                  <br />

                  <br />

                  <br />

                  <strong>KPI DATA</strong>

                  <br />

                  <br />

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
                    <label>User satisfaction (%)</label>

                    <input
                      className="form-control"
                      value={this.state.userSatisfaction}
                      onChange={this.handleInput('userSatisfaction')}
                      type="number"
                      min="0"
                      max="100"
                    />
                  </div>

                  <div className="form-group">
                    <label>Cost per transaction ($)</label>

                    <input
                      className="form-control"
                      value={this.state.costPerTransaction}
                      onChange={this.handleInput('costPerTransaction')}
                      type="number"
                      min="0"
                      max="1000000000"
                    />
                  </div>

                  <div className="form-group">
                    <label>Digital take-up (%)</label>

                    <input
                      className="form-control"
                      value={this.state.digitalTakeup}
                      onChange={this.handleInput('digitalTakeup')}
                      type="number"
                      min="0"
                      max="100"
                    />
                  </div>

                  <div className="form-group">
                    <label>Completion rate (%)</label>

                    <input
                      className="form-control"
                      value={this.state.completionRate}
                      onChange={this.handleInput('completionRate')}
                      min="0"
                      max="100"
                    />
                  </div>

                  <br />

                  <br />

                  <input
                    type="submit"
                    value="Create dashboard"
                    className="btn btn-primary"
                    disabled={this.state.processing}
                  />
                </div>

                <div className="col-xs-12 col-lg-6">
                  <div
                    style={{ backgroundColor: '#eee', padding: '24px' }}
                    className={style.createDashboard_notes}
                  >
                    <strong>NOTES</strong>

                    <br />

                    <br />

                    {this.state.notes.map(note => (
                      <div key={note.time}>
                        <div>
                          <strong>{note.title} </strong>

                          <a
                            onClick={(event) => { event.preventDefault(); this.removeNote(note.time); }}
                            className="UIK-link"
                          >
                            Remove
                          </a>
                        </div>

                        <div>{note.body}</div>

                        <hr />
                      </div>
                    ))}

                    <div className="form-group">
                      <label>Title</label>

                      <input
                        className="form-control"
                        value={this.state.noteTitle}
                        onChange={this.handleInput('noteTitle')}
                      />
                    </div>

                    <div className="form-group">
                      <label>Body</label>

                      <input
                        className="form-control"
                        value={this.state.noteBody}
                        onChange={this.handleInput('noteBody')}
                      />
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-link"
                        value={this.state.noteBody}
                        onClick={this.addNote}
                        style={{backgroundColor: '#ddd'}}
                      >
                        Add note
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

CreateDashboard.propTypes = {
  initialiseDashboard: PropTypes.func.isRequired,
  createWidget: PropTypes.func.isRequired,
  createDashboard: PropTypes.func.isRequired,
  organisations: PropTypes.array.isRequired,
};

export default connect(
  state => ({ organisations: state.organisations }),
  dispatch => ({
    initialiseDashboard: (payload) => {
      return dispatch(initialiseDashboard(payload));
    },
    createDashboard: (payload) => {
      return dispatch(createDashboard(payload));
    },
    createWidget: (dashboardId, payload) => {
      return dispatch(createWidget(dashboardId, payload));
    },
  }),
)(CreateDashboard);
