import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState, useEffect } from 'react';

import { auth, onAuthStateChanged, signInWithGoogle, logout } from './firebase.js';
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import AddJobsPage from "./pages/AddJobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobDetailsPage, { jobLoader } from "./pages/JobDetailsPage";
import EditJobPage from "./pages/EditJobPage";

const App = () => {
  // User Status
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

// Add new Job
const addJob = async (newJob) => {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });

  if (!res.ok) {
    throw new Error('Failed to add job');
  }

  return await res.json(); // Return the added job data
};

// Delete Job
const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error('Failed to delete job');
  }

  return res.status; // Return the status of the deletion
};

// Update Job
const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });

  if (!res.ok) {
    throw new Error('Failed to update job');
  }

  return await res.json(); // Return the updated job data
};

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout user={user} handleLogin={handleLogin} handleLogout={handleLogout}/>}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobDetailsPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-jobs/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobsPage addJobSubmit={addJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
