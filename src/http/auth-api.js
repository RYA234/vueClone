import api from "./api";
export const csrfCookie = () => api.get("/sanctum/csrf-cookie");
export const login = (credential) => api.post("/auth/login", credential);
export const register = (user) => api.post("/auth/register", user);
export const logout = () => api.post("/auth/logout");
export const getUser = () => api.get("/auth/user");