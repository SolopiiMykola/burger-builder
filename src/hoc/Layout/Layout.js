import React, {Component} from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SiteDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    };

    siteDrawToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
            <Aux>
            <Toolbar 
                isAuth={this.props.isAuthenticated}
                drawToogleClicked={this.siteDrawToogleHandler}
                ></Toolbar>
            <SideDrawer 
            isAuth={this.props.isAuthenticated}
            closed={this.sideDrawerCloseHandler}
            open={this.state.showSideDrawer}></SideDrawer>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);