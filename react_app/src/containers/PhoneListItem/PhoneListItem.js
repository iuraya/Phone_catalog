/* eslint react/require-default-props: "warn" */
/* eslint react/forbid-prop-types: "warn" */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ActionsPhones from '../../actions/ActionsPhones'
import './style.scss';


class PhoneListItem extends React.PureComponent {
  render() {
    const { phone } = this.props;
    return (
      <button className="phone-list-item" onClick={() => this.props.selectPhone(phone)}>
        <img className="thumbnail" alt={phone.name} src={phone.image} />
        <p>{`${phone.brand} ${phone.name}`}</p>
      </button>
    );
  }
}

PhoneListItem.propTypes = {
  phone: PropTypes.object,
  selectPhone: PropTypes.func,
};


const matchDispatchToProps = (dispatch) => {
  return {
    selectPhone: (phone) => dispatch(ActionsPhones.selectPhone(phone)),
  }
}

export default connect(null, matchDispatchToProps)(PhoneListItem);
