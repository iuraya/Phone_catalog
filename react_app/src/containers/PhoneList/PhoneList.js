/* eslint react/require-default-props: "warn" */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as ActionsPhones from '../../actions/ActionsPhones'
import LoadingIndicator from '../../components/LoadingIndicator';
import PhoneListItem from '../PhoneListItem';
import './style.scss';

class PhoneList extends React.PureComponent {
  /**
   * If there is no list of phones we get them once the page is mounted
   */
  componentDidMount() {
    const { phones } = this.props;
    if (phones == null) {
      this.props.loadPhones();
    }
  }

  renderPhonesList(loading, phones) {
    // Is fetching the phones
    if (loading) {
      return <LoadingIndicator />;
    }
    // Shows the phones
    if (phones != null) {
      const phonesList = phones.map((phone) => (
        <PhoneListItem key={phone.id} phone={phone} />
      ));

      return (
        <div className="list-wrapper">
          <ul>
            {phonesList}
          </ul>
        </div>
      );
    }
    // There is no phones
    return null;
  }

  render() {
    const { loading, phones } = this.props;
    const phonesList = this.renderPhonesList(loading, phones)

    return (
      <article>
        <div className="phone-list">
          <section className="centered">
            <h2>Select a phone to view in detail  </h2>
          </section>
          <section>
            {phonesList}
          </section>
        </div>
      </article>
    );
  }
}

PhoneList.propTypes = {
  loading: PropTypes.bool,
  phones: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  loadPhones: PropTypes.func,
};


const mapStateToProps = (state) => {
  return {
    phones: state.phones.phonesList,
    loading: state.phones.loading,
  };
}

const matchDispatchToProps = (dispatch) => {
  return {
    loadPhones: () => dispatch(ActionsPhones.loadPhones()),
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(PhoneList);
export { matchDispatchToProps };
