import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateRoute from "./Helpers/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SubscriptionPage from "./pages/SubscriptionPage";
import SubscriptionDashboard from "./pages/SubscriptionDashboard";
import TabsComponents from "./pages/TabsComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/subscription"
            element={
              // <PrivateRoute>
                <SubscriptionPage />
              // </PrivateRoute>
            }
          />
          <Route path="/dashboard" element={<SubscriptionDashboard/>} />
          <Route path="/subscriber/tabs" element={<TabsComponents/>} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
