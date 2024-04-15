import React from 'react';
import Header from "./Header";
import { connect } from 'react-redux';
import { setAuthUserData, setIsFetching } from '../../redux/authReducer';
import axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(data => {
                this.props.setIsFetching(false);
                if (data.data.resultCode === 0) {
                    let { id, login, email } = data.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }

}

const mapStateToProps = (state) => ({});


export default connect(mapStateToProps, { setAuthUserData, setIsFetching })(HeaderContainer);