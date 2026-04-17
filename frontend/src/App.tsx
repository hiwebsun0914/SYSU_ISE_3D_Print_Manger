import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Layout } from './components/Layout';
import { useWebSocket } from './hooks/useWebSocket';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SpoolBuddyLayout } from './components/spoolbuddy/SpoolBuddyLayout';

const loadPrintersPage = () => import('./pages/PrintersPage');
const loadArchivesPage = () => import('./pages/ArchivesPage');
const loadQueuePage = () => import('./pages/QueuePage');
const loadStatsPage = () => import('./pages/StatsPage');
const loadSettingsPage = () => import('./pages/SettingsPage');
const loadProfilesPage = () => import('./pages/ProfilesPage');
const loadMaintenancePage = () => import('./pages/MaintenancePage');
const loadProjectsPage = () => import('./pages/ProjectsPage');
const loadProjectDetailPage = () => import('./pages/ProjectDetailPage');
const loadFileManagerPage = () => import('./pages/FileManagerPage');
const loadOnlineSlicerPage = () => import('./pages/OnlineSlicerPage');
const loadKiriMotoPage = () => import('./pages/KiriMotoPage');
const loadModelLibraryPage = () => import('./pages/ModelLibraryPage');
const loadCameraPage = () => import('./pages/CameraPage');
const loadStreamOverlayPage = () => import('./pages/StreamOverlayPage');
const loadExternalLinkPage = () => import('./pages/ExternalLinkPage');
const loadGroupEditPage = () => import('./pages/GroupEditPage');
const loadInventoryPage = () => import('./pages/InventoryPage');
const loadSystemInfoPage = () => import('./pages/SystemInfoPage');
const loadLoginPage = () => import('./pages/LoginPage');
const loadSetupPage = () => import('./pages/SetupPage');
const loadNotificationsPage = () => import('./pages/NotificationsPage');
const loadSpoolBuddyDashboard = () => import('./pages/spoolbuddy/SpoolBuddyDashboard');
const loadSpoolBuddyAmsPage = () => import('./pages/spoolbuddy/SpoolBuddyAmsPage');
const loadSpoolBuddySettingsPage = () => import('./pages/spoolbuddy/SpoolBuddySettingsPage');
const loadSpoolBuddyCalibrationPage = () => import('./pages/spoolbuddy/SpoolBuddyCalibrationPage');
const loadSpoolBuddyWriteTagPage = () => import('./pages/spoolbuddy/SpoolBuddyWriteTagPage');
const loadSpoolBuddyInventoryPage = () => import('./pages/spoolbuddy/SpoolBuddyInventoryPage');

const PrintersPage = lazy(() => loadPrintersPage().then((m) => ({ default: m.PrintersPage })));
const ArchivesPage = lazy(() => loadArchivesPage().then((m) => ({ default: m.ArchivesPage })));
const QueuePage = lazy(() => loadQueuePage().then((m) => ({ default: m.QueuePage })));
const StatsPage = lazy(() => loadStatsPage().then((m) => ({ default: m.StatsPage })));
const SettingsPage = lazy(() => loadSettingsPage().then((m) => ({ default: m.SettingsPage })));
const ProfilesPage = lazy(() => loadProfilesPage().then((m) => ({ default: m.ProfilesPage })));
const MaintenancePage = lazy(() => loadMaintenancePage().then((m) => ({ default: m.MaintenancePage })));
const ProjectsPage = lazy(() => loadProjectsPage().then((m) => ({ default: m.ProjectsPage })));
const ProjectDetailPage = lazy(() => loadProjectDetailPage().then((m) => ({ default: m.ProjectDetailPage })));
const FileManagerPage = lazy(() => loadFileManagerPage().then((m) => ({ default: m.FileManagerPage })));
const OnlineSlicerPage = lazy(() => loadOnlineSlicerPage().then((m) => ({ default: m.OnlineSlicerPage })));
const KiriMotoPage = lazy(() => loadKiriMotoPage().then((m) => ({ default: m.KiriMotoPage })));
const ModelLibraryPage = lazy(() => loadModelLibraryPage().then((m) => ({ default: m.ModelLibraryPage })));
const CameraPage = lazy(() => loadCameraPage().then((m) => ({ default: m.CameraPage })));
const StreamOverlayPage = lazy(() => loadStreamOverlayPage().then((m) => ({ default: m.StreamOverlayPage })));
const ExternalLinkPage = lazy(() => loadExternalLinkPage().then((m) => ({ default: m.ExternalLinkPage })));
const GroupEditPage = lazy(() => loadGroupEditPage().then((m) => ({ default: m.GroupEditPage })));
const InventoryPage = lazy(() => loadInventoryPage());
const SystemInfoPage = lazy(() => loadSystemInfoPage().then((m) => ({ default: m.SystemInfoPage })));
const LoginPage = lazy(() => loadLoginPage().then((m) => ({ default: m.LoginPage })));
const SetupPage = lazy(() => loadSetupPage().then((m) => ({ default: m.SetupPage })));
const NotificationsPage = lazy(() => loadNotificationsPage().then((m) => ({ default: m.NotificationsPage })));
const SpoolBuddyDashboard = lazy(() => loadSpoolBuddyDashboard().then((m) => ({ default: m.SpoolBuddyDashboard })));
const SpoolBuddyAmsPage = lazy(() => loadSpoolBuddyAmsPage().then((m) => ({ default: m.SpoolBuddyAmsPage })));
const SpoolBuddySettingsPage = lazy(() => loadSpoolBuddySettingsPage().then((m) => ({ default: m.SpoolBuddySettingsPage })));
const SpoolBuddyCalibrationPage = lazy(() => loadSpoolBuddyCalibrationPage().then((m) => ({ default: m.SpoolBuddyCalibrationPage })));
const SpoolBuddyWriteTagPage = lazy(() => loadSpoolBuddyWriteTagPage().then((m) => ({ default: m.SpoolBuddyWriteTagPage })));
const SpoolBuddyInventoryPage = lazy(() => loadSpoolBuddyInventoryPage().then((m) => ({ default: m.SpoolBuddyInventoryPage })));

const backgroundPagePreloaders = [
  loadQueuePage,
  loadStatsPage,
  loadMaintenancePage,
  loadArchivesPage,
  loadInventoryPage,
  loadProjectsPage,
  loadFileManagerPage,
  loadModelLibraryPage,
  loadSettingsPage,
  loadProfilesPage,
  loadNotificationsPage,
  loadKiriMotoPage,
];
const BACKGROUND_PREFETCH_INITIAL_DELAY_MS = 2500;
const BACKGROUND_PREFETCH_INTERVAL_MS = 700;
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

function BackgroundPagePrefetcher() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const connection = (navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        saveData?: boolean;
      };
    }).connection;
    if (connection?.saveData || ['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '')) {
      return;
    }

    let cancelled = false;
    let timerId: number | null = null;
    let index = 0;

    const preloadNext = () => {
      if (cancelled || index >= backgroundPagePreloaders.length) {
        return;
      }

      const loader = backgroundPagePreloaders[index++];
      void loader().catch(() => undefined).finally(() => {
        if (!cancelled) {
          timerId = window.setTimeout(preloadNext, BACKGROUND_PREFETCH_INTERVAL_MS);
        }
      });
    };

    timerId = window.setTimeout(preloadNext, BACKGROUND_PREFETCH_INITIAL_DELAY_MS);

    return () => {
      cancelled = true;
      if (timerId !== null) {
        window.clearTimeout(timerId);
      }
    };
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <BrowserRouter>
              <BackgroundPagePrefetcher />
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
                  <Route path="model-library" element={<ModelLibraryPage />} />
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
