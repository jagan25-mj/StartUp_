import { LayoutDashboard, Users, Briefcase, TrendingUp } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-600 mt-1">Phase 1 - Foundation Setup</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Startups</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Talent Pool</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Matches</p>
                <p className="text-2xl font-bold text-gray-900">0</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Dashboard</p>
                <p className="text-2xl font-bold text-gray-900">v1.0</p>
              </div>
              <LayoutDashboard className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Phase 1 Complete ✅</h2>
          <div className="space-y-2 text-gray-700">
            <p>✓ Django backend with custom User model</p>
            <p>✓ SQLite database configured</p>
            <p>✓ Django REST Framework setup</p>
            <p>✓ CORS headers configured</p>
            <p>✓ React frontend with routing</p>
            <p>✓ Axios configured for API calls</p>
            <p>✓ Health check endpoint working</p>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Next Phase:</strong> Authentication, user profiles, and startup creation
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;