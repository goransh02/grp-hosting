import { AppUserAuth } from "./app-user-auth";

export const LOGIN_MOCKS: AppUserAuth[] = [
    {
        userName: "Danish Angural",
        bearerToken: "danish02",
        isAuthenticated: true,
        canAccessProducts: true,
        canDeleteComplaint: true,
        canSaveProduct: true,
        canAccessCategories: true,
        canAddCategory: false
    },
    {
        userName: "Goransh Gattani",
        bearerToken: "goransh02",
        isAuthenticated: true,
        canAccessProducts: false,
        canDeleteComplaint: false,
        canSaveProduct: false,
        canAccessCategories: true,
        canAddCategory: true
    }
];