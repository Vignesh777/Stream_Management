import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id);
    }
    renderActions(){
        return (
            <React.Fragment>
                <button 
                    onClick={()=>this.props.deleteStream(this.props.match.params.id)} 
                    className='ui button negative'
                >
                    Delete
                </button>
                <Link to={'/'} className='ui button'>Cancel</Link>
            </React.Fragment>
        );
    }
    renderMessage(){
        if(!this.props.stream){
            return 'Are you sure you want delete this stream?'
        }
        return `Are you sure you want delete the stream with title: ${this.props.stream.title} ?`
    }
    render(){
        console.log(this.props)
        return(
            <Modal 
                title='Delete Stream'
                message={this.renderMessage()}
                actions={this.renderActions()}
                onDismiss={()=>history.push('/')}
            />
        )
    }
};
const mapStateToProps = (state,ownProps) =>{
    return {stream: state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete);