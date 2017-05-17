import React, { Component } from 'react';
import {connect} from 'react-redux';
import LoadArticle from '../component/LoadArticle';
import redirect from '../hight-order-component/redirect'
import {showFlashMessage,removeFlashMessage} from '../reducer/index';
const mapStateToProps = (state)=>(
  state.login
)
const mapDispatchToProps = (dispatch)=>{
	return {
		showFlashMessage:(message)=>{
			dispatch(showFlashMessage(message))
		},
		removeFlashMessage:()=>{
			dispatch(removeFlashMessage);
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(redirect(LoadArticle));
