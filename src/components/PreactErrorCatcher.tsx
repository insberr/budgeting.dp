import { Component, ComponentChildren, ErrorInfo } from 'preact';
import { Box, Button } from '@mui/material';

type props = { children: ComponentChildren };
type state = { hasError: boolean };

const isProductionBuild = process.env.NODE_ENV === 'production';

export default class PreactErrorCatcher extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_: Error) {
        // Update state so the next render will show the fallback UI.
        console.error(_);
        return { hasError: true };
    }

    componentDidCatch(_q: Error, _e: ErrorInfo) {
        console.error(_q, _e);
        // You can also log the error to an error reporting service
        // No logging to a service for now

        this.setState({ hasError: true });
    }

    render(props: props, state: state) {
        if (state.hasError) {
            return (
                <Box>
                    <h2 className="text-center full-center">
                        Hmmm... Something went wrong, Try refreshing. If the error continues, please let me know!
                    </h2>
                    <h4 className="text-center full-center">If you are a developer, check the console for more details.</h4>
                    <div className="text-center full-center">
                        <div>You can also try resetting the website</div>
                        <Button
                            variant="outlined"
                            color="warning"
                            onClick={() => {
                                location.reload();
                            }}
                        >
                            Reset (TODO)
                        </Button>
                    </div>
                </Box>
            );
        }

        return props.children;
    }
}
