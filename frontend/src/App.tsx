import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout';
import { useWebSocket } from './hooks/useWebSocket';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SpoolBuddyLayout } from './components/spoolbuddy/SpoolBuddyLayout';

const PrintersPage = lazy(() => import('./pages/PrintersPage').then((m) => ({ default: m.PrintersPage })));
const ArchivesPage = lazy(() => import('./pages/ArchivesPage').then((m) => ({ default: m.ArchivesPage })));
const QueuePage = lazy(() => import('./pages/QueuePage').then((m) => ({ default: m.QueuePage })));
const StatsPage = lazy(() => import('./pages/StatsPage').then((m) => ({ default: m.StatsPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then((m) => ({ default: m.SettingsPage })));
const ProfilesPage = lazy(() => import('./pages/ProfilesPage').then((m) => ({ default: m.ProfilesPage })));
const MaintenancePage = lazy(() => import('./pages/MaintenancePage').then((m) => ({ default: m.MaintenancePage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const FileManagerPage = lazy(() => import('./pages/FileManagerPage').then((m) => ({ default: m.FileManagerPage })));
const OnlineSlicerPage = lazy(() => import('./pages/OnlineSlicerPage').then((m) => ({ default: m.OnlineSlicerPage })));
const KiriMotoPage = lazy(() => import('./pages/KiriMotoPage').then((m) => ({ default: m.KiriMotoPage })));
const CameraPage = lazy(() => import('./pages/CameraPage').then((m) => ({ default: m.CameraPage })));
const StreamOverlayPage = lazy(() => import('./pages/StreamOverlayPage').then((m) => ({ default: m.StreamOverlayPage })));
const ExternalLinkPage = lazy(() => import('./pages/ExternalLinkPage').then((m) => ({ default: m.ExternalLinkPage })));
const GroupEditPage = lazy(() => import('./pages/GroupEditPage').then((m) => ({ default: m.GroupEditPage })));
const InventoryPage = lazy(() => import('./pages/InventoryPage'));
const SystemInfoPage = lazy(() => import('./pages/SystemInfoPage').then((m) => ({ default: m.SystemInfoPage })));
const LoginPage = lazy(() => import('./pages/LoginPage').then((m) => ({ default: m.LoginPage })));
const SetupPage = lazy(() => import('./pages/SetupPage').then((m) => ({ default: m.SetupPage })));
const NotificationsPage = lazy(() => import('./pages/NotificationsPage').then((m) => ({ default: m.NotificationsPage })));
const SpoolBuddyDashboard = lazy(() => import('./pages/spoolbuddy/SpoolBuddyDashboard').then((m) => ({ default: m.SpoolBuddyDashboard })));
const SpoolBuddyAmsPage = lazy(() => import('./pages/spoolbuddy/SpoolBuddyAmsPage').then((m) => ({ default: m.SpoolBuddyAmsPage })));
const SpoolBuddySettingsPage = lazy(() => import('./pages/spoolbuddy/SpoolBuddySettingsPage').then((m) => ({ default: m.SpoolBuddySettingsPage })));
const SpoolBuddyCalibrationPage = lazy(() => import('./pages/spoolbuddy/SpoolBuddyCalibrationPage').then((m) => ({ default: m.SpoolBuddyCalibrationPage })));
const SpoolBuddyWriteTagPage = lazy(() => import('./pages/spoolbuddy/SpoolBuddyWriteTagPage').then((m) => ({ default: m.SpoolBuddyWriteTagPage })));
const SpoolBuddyInventoryPage = lazy(() => import('./pages/spoolbuddy/SpoolBuddyInventoryPage').then((m) => ({ default: m.SpoolBuddyInventoryPage })));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      retry: 1,
    },
  },
});

function WebSocketProvider({ children }: { children: React.ReactNode }) {
  useWebSocket();
  return <>{children}</>;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { authEnabled, loading, user } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (authEnabled && !user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { authEnabled, loading, user, isAdmin } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If auth is not enabled, allow access (backward compatibility)
  if (!authEnabled) {
    return <>{children}</>;
  }

  // If auth is enabled but no user, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If user is not admin, redirect to home
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function SetupRoute({ children }: { children: React.ReactNode }) {
  const { authEnabled, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // If auth is already enabled, redirect to login
  // Otherwise, allow access to setup page (even if setup was completed before)
  // This allows users to enable auth later if they skipped it during initial setup
  if (authEnabled) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <BrowserRouter>
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
              <Routes>
                {/* Setup page - only accessible if auth not enabled */}
                <Route path="/setup" element={<SetupRoute><SetupPage /></SetupRoute>} />

                {/* Login page */}
                <Route path="/login" element={<LoginPage />} />

                {/* Camera page - standalone, no layout, no WebSocket (doesn't need real-time updates) */}
                <Route path="/camera/:printerId" element={<CameraPage />} />

                {/* Stream overlay page - standalone for OBS/streaming embeds, no auth required */}
                <Route path="/overlay/:printerId" element={<StreamOverlayPage />} />

                {/* SpoolBuddy kiosk UI */}
                <Route element={<ProtectedRoute><WebSocketProvider><SpoolBuddyLayout /></WebSocketProvider></ProtectedRoute>}>
                  <Route path="spoolbuddy" element={<SpoolBuddyDashboard />} />
                  <Route path="spoolbuddy/ams" element={<SpoolBuddyAmsPage />} />
                  <Route path="spoolbuddy/write-tag" element={<SpoolBuddyWriteTagPage />} />
                  <Route path="spoolbuddy/inventory" element={<SpoolBuddyInventoryPage />} />
                  <Route path="spoolbuddy/settings" element={<SpoolBuddySettingsPage />} />
                  <Route path="spoolbuddy/calibration" element={<SpoolBuddyCalibrationPage />} />
                </Route>

                {/* Main app with WebSocket for real-time updates */}
                <Route element={<ProtectedRoute><WebSocketProvider><Layout /></WebSocketProvider></ProtectedRoute>}>
                  <Route index element={<PrintersPage />} />
                  <Route path="archives" element={<ArchivesPage />} />
                  <Route path="queue" element={<QueuePage />} />
                  <Route path="stats" element={<StatsPage />} />
                  <Route path="profiles" element={<ProfilesPage />} />
                  <Route path="maintenance" element={<MaintenancePage />} />
                  <Route path="projects" element={<ProjectsPage />} />
                  <Route path="projects/:id" element={<ProjectDetailPage />} />
                  <Route path="inventory" element={<InventoryPage />} />
                  <Route path="files" element={<FileManagerPage />} />
                  <Route path="slicer" element={<OnlineSlicerPage provider="bambu_studio" />} />
                  <Route path="kiri-moto" element={<KiriMotoPage />} />
                  <Route path="orca-slicer" element={<Navigate to="/kiri-moto" replace />} />
                  <Route path="settings" element={<AdminRoute><SettingsPage /></AdminRoute>} />
                  <Route path="groups/new" element={<AdminRoute><GroupEditPage /></AdminRoute>} />
                  <Route path="groups/:id/edit" element={<AdminRoute><GroupEditPage /></AdminRoute>} />
                  <Route path="users" element={<Navigate to="/settings?tab=users" replace />} />
                  <Route path="groups" element={<Navigate to="/settings?tab=users" replace />} />
                  <Route path="system" element={<SystemInfoPage />} />
                  <Route path="notifications" element={<NotificationsPage />} />
                  <Route path="external/:id" element={<ExternalLinkPage />} />
                </Route>
              </Routes>
              </Suspense>
            </BrowserRouter>
          </AuthProvider>
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
