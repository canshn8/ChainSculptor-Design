import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const Account = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Hata mesajını temizle
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLogin) {
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
    }

    try {
      if (isLogin) {
        console.log("Logging in with:", formData);
        // dispatch(login({ emailOrUsername: formData.emailOrUsername, password: formData.password }));
      } else {
        console.log("Registering with:", formData);
        // dispatch(register(formData));
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Hesabım | Freelance Platform</title>
        <meta name="description" content="Hesabınızla ilgili tüm ayarlarınızı ve bilgilere buradan ulaşabilirsiniz." />
        <meta name="keywords" content="hesap, kullanıcı ayarları, profil, freelance, iş yönetimi" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Hesabım | Freelance Platform" />
        <meta property="og:description" content="Kullanıcı hesabınızla ilgili tüm bilgilere ve ayarlara buradan erişebilirsiniz." />
        <meta property="og:image" content="https://yourwebsite.com/path-to-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/account" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hesabım | Freelance Platform" />
        <meta name="twitter:description" content="Kullanıcı hesabınızla ilgili tüm bilgilere ve ayarlara buradan erişebilirsiniz." />
        <meta name="twitter:image" content="https://yourwebsite.com/path-to-image.jpg" />
      </Helmet>

    <div className="min-h-screen flex items-center bg-white dark:bg-bej justify-center ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="border-input p-8 rounded-lg shadow-lg shadow-[#A89F91]/30 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-darkBrown mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <div className="mb-4">
              <label className="block text-darkBrown mb-2">Email or Username</label>
              <input
                type="text"
                name="emailOrUsername"
                className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none focus:ring-2 focus:ring-[#8E806A]"
                placeholder="Enter your email or username"
                value={formData.emailOrUsername}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-darkBrown mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none focus:ring-2 focus:ring-[#8E806A] autofill:bg-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                />

              </div>
              <div className="mb-4">
                <label className="block text-darkBrown mb-2">Username</label>
                <input
                    type="text"
                    name="username"
                    className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none focus:ring-2 focus:ring-[#8E806A]"
                    placeholder="Enter your username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                />
              </div>
            </>
          )}
          <div className="mb-4 relative">
            <label className="block text-darkBrown mb-2">Password</label>
            <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none focus:ring-2 focus:ring-[#8E806A]"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="off"
                required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-[#6B5B4B] text-lg"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {!isLogin && (
            <div className="mb-6 relative">
              <label className="block text-darkBrown mb-2">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                className="w-full px-4 py-2 rounded-lg bg-input text-darkBrown focus:outline-none focus:ring-2 focus:ring-[#8E806A]"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="off"
                required
              />
            </div>
          )}

          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-[#8E806A] hover:bg-[#6B5B4B] text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            {isLogin ? "Login" : "Register"}
          </motion.button>
        </form>
        <p className="text-darkBrown mt-4 text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#6B5B4B] hover:underline ml-2"
          >
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default Account;
