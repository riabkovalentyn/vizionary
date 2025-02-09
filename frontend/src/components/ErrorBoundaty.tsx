import React, { Component } from "react";
import { getDatasetAtEvent } from "react-chartjs-2";

interface ErrorBoundatyProps{
    children: React.ReactNode;
    }
interface ErrorBoundatyState{
    hasError: boolean;
}
class ErrorBoundary extends Component<ErrorBoundatyProps, ErrorBoundatyState> {
    constructor(props: ErrorBoundatyProps){
        super(props)
        this.state = {hasError: false};
    }
    static getDerivedStateFromError(error: Error): ErrorBoundatyState{
        return {hasError: true};
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void{
        console.error('ErrorBoundary caught an error:', error, info);
    }
    render(){
        if (this.state.hasError)
            return <h1>Something went wrong.</h1>
        
        return this.props.children;
    }
}
export default ErrorBoundary