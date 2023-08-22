import { createSlice } from "@reduxjs/toolkit";

const websiteInitialState = {
  theme: "light",
  formOpenState: false,
  firstName: "",
  lastName: "",
  email: "",
  formSubmitted: false,
  popupType: "entry",
  firstNameError: false,
  lastNameError: false,
  emailError: false,
};

const websiteSlice = createSlice({
  name: "website",
  initialState: websiteInitialState,
  reducers: {
    switchTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
      var element = document.body;
      element.classList.toggle("body-dark");
    },
    formOpenHandler(state, action) {
      state.formOpenState = action.payload;
    },

    setPopupType(state, action) {
      state.popupType = action.payload;
    },

    submitForm(state, action) {
      const data = action.payload;
      const errors = [];

      const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
      };

      const validateName = (name) => {
        const namePattern = /^[A-Za-z]+$/;
        return namePattern.test(name);
      };

      const validationRules = [
        {
          field: "firstName",
          check: validateName(data.firstName),
        },
        {
          field: "lastName",
          check: validateName(data.lastName),
        },
        {
          field: "email",
          check: validateEmail(data.email),
        },
      ];

      validationRules.forEach((rule) => {
        if (!rule.check) {
          errors.push(rule.field);
        }
      });

      if (errors.length > 0) {
        return {
          ...state,
          firstName: "",
          lastName: "",
          email: "",
          formSubmitted: true,
          popupType: "invalid",
          firstNameError: errors.includes("firstName"),
          lastNameError: errors.includes("lastName"),
          emailError: errors.includes("email"),
        };
      } else {
        return {
          ...state,
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          formSubmitted: true,
          popupType: "valid",
          firstNameError: false,
          lastNameError: false,
          emailError: false,
          formOpenState: false,
        };
      }
    },
  },
});

export const websiteActions = websiteSlice.actions;
export const websiteReducer = websiteSlice.reducer;
