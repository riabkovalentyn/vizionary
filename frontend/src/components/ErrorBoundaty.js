import React, { Component } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error){
        return {hasError: true};
    }

    componentDidCatch(error, info){
        console.error('ErrorBoundary caught an error:', error, info);
    }
    render(){
        if (this.state.hasError)
            return <h1>Something went wrong.</h1>
        
        return this.props.children;
    }
}
export default ErrorBoundary