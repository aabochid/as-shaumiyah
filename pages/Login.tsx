
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock password for demo
    if (password === 'nasuhi76') {
      sessionStorage.setItem('isAdmin', 'true');
      navigate('/admin');
    } else {
      setError('Password salah. Silakan coba lagi.');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-xl border border-emerald-50 text-center">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-3xl mb-6">🔒</div>
        <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Akses Admin</h1>
        <p className="text-slate-500 mb-8">Masukkan password untuk mengelola website.</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-left">
            <label className="text-sm font-bold text-slate-700 block mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password admin"
              autoFocus
            />
          </div>
          {error && <p className="text-red-500 text-sm font-bold">{error}</p>}
          <button 
            type="submit" 
            className="w-full py-4 bg-emerald-600 text-white font-extrabold rounded-2xl shadow-lg hover:bg-emerald-700 transition-all transform hover:scale-[1.02]"
          >
            Masuk Panel Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
