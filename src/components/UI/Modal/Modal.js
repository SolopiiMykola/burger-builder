import React, {useEffect} from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {

    useEffect(() => {
        console.log('[Modal.js] 2nd useEffect');
        return () => {
            // props.show == false;
        }
    }, [])

   return (
    <Aux>
            <Backdrop show={props.show} clicked={props.modalClose}></Backdrop>
            <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
                {props.children}
            </div>
        </Aux>
   ) 
}

export default React.memo(Modal);