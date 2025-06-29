/*

What are error boundaries in React v16?
    Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError() :

    class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, info)
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
        // You can render any custom fallback UI
            return <h1>{'Something went wrong.'}</h1>
        }
        return this.props.children
    }
    }
    After that use it as a regular component:

    <ErrorBoundary>
        <MyWidget />
    </ErrorBoundary>

How error boundaries handled in React v15?
    - React v15 provided very basic support for error boundaries using unstable_handleError method. It has been renamed to componentDidCatch in React v16.

*/