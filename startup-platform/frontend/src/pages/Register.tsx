import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <UserPlus className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Register
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Phase 1 - Placeholder Page
          </p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              placeholder="Registration coming in Phase 2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            >
              <option>Founder</option>
              <option>Talent</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              disabled
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              placeholder="••••••••"
            />
          </div>
          
          <button
            disabled
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-gray-400 cursor-not-allowed"
          >
            Register (Coming Soon)
          </button>
          
          <div className="text-center text-sm">
            <Link to="/login" className="text-blue-600 hover:text-blue-500">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;