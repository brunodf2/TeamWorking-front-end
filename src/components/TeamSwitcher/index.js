import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamsActions from '~/store/ducks/teams';

import { Container, TeamList, Team } from './styles';

class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { getTeamsRequest } = this.props;

    getTeamsRequest();
  }

  render() {
    return (
      <Container>
        <TeamList>
          <Team>
            <img src="https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=Team" alt="Team" />
          </Team>
          <Team>
            <img src="https://ui-avatars.com/api/?font-size=0.33&background=4FF06F&color=fff&name=SU" alt="Team" />
          </Team>
          <Team>
            <img src="https://ui-avatars.com/api/?font-size=0.33&background=FD441C&color=fff&name=RO" alt="Team" />
          </Team>
        </TeamList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  teams: state.teams,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
