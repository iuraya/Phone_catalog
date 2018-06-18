/* eslint react/require-default-props: "warn" */
/* eslint react/forbid-prop-types: "warn" */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.scss';


class PhoneDetail extends React.PureComponent {
  render() {
    const { currentPhone } = this.props;
    if (currentPhone) {
      const title = `${currentPhone.brand} ${currentPhone.name}`
      return (
        <div className="phone-detail">
          <section className="centered">
            <h2>{title}
            in detail:
            </h2>
            <img className="thumbnail" alt={currentPhone.name} src={currentPhone.image} />
          </section>
          <section>
            <h3>Description</h3>
            <p>{currentPhone.description}</p>
            <h3>Camera</h3>
            <p>{currentPhone.camera_description}</p>
          </section>
        </div>
      );
    }

    return null
  }
}

PhoneDetail.propTypes = {
  currentPhone: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

const mapStateToProps = (state) => {
  return { currentPhone: state.phones.currentPhone };
}

export default connect(mapStateToProps, null)(PhoneDetail);
