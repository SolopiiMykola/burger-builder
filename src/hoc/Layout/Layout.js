import React, {useState} from 'react';
import { connect } from 'react-redux';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SiteDrawer/SideDrawer';

const Layout = props => {
    const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

    const sideDrawerCloseHandler = () => {
        setSideDrawerIsVisible(false);
    };

    const siteDrawToogleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerIsVisible)
    }

        return (
            <Aux>
            <Toolbar 
                isAuth={props.isAuthenticated}
                drawToogleClicked={siteDrawToogleHandler}
                ></Toolbar>
            <SideDrawer 
            isAuth={props.isAuthenticated}
            closed={sideDrawerCloseHandler}
            open={sideDrawerIsVisible}></SideDrawer>
            <main className={classes.Content}>{props.children}</main>
        </Aux>
        )
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}
export default connect(mapStateToProps)(Layout);