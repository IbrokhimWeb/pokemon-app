import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ open, children }) => {
    if (!open) {
        return <Navigate to="/start" replace />;
    }
    return children;
};

export default ProtectedRoute;