import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { addPost, removePost, changeLikesCount, setUserProfile, setIsFetching } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getProfile } from "../../API/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.setIsFetching(true);

        if (userId !== undefined) {
            getProfile(userId).then(data => {
                this.props.setIsFetching(false);
                this.props.setUserProfile(data);
            })
        }

        getProfile(31081).then(data => {
            this.props.setIsFetching(false);
            this.props.setUserProfile(data);
        })
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let withRouter = (Component) => {
    let ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate()
        let params = useParams();
        return (<Component {...props} router={{ location, navigate, params }} />)
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile, addPost, removePost, changeLikesCount, setIsFetching })(withRouter(ProfileContainer));