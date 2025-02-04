import axiosInstance from "@/lib/axios";
import { LoginRequest, LoginResponse } from "@/types/auth";

export const loginService = async (
  credentials: LoginRequest,
): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      "/login",
      credentials,
    );

    if (response.data.status && response.data.dataProfile) {
      localStorage.setItem(
        "userProfile",
        JSON.stringify(response.data.dataProfile),
      );
      return response.data;
    } else {
      throw {
        response: {
          status: 405,
          data: {
            message: response.data.message || "Login failed",
          },
        },
      };
    }
  } catch (error: any) {
    throw error;
  }
};

export const getUserProfile = () => {
  const profileString = localStorage.getItem("userProfile");
  return profileString ? JSON.parse(profileString) : null;
};

export const isAuthenticated = () => {
  return !!getUserProfile();
};
