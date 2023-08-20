import { createSlice } from "@reduxjs/toolkit";

const websiteInitialState = {
  formOpenState: false,
  firstName: "",
  lastName: "",
  email: "",
  formValid: false,
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
        state.firstName = "";
        state.lastName = "";
        state.email = "";
        state.formSubmitted = true;
        state.formValid = false;
        state.popupType = "invalid";
        state.firstNameError = errors.includes("firstName");
        state.lastNameError = errors.includes("lastName");
        state.emailError = errors.includes("email");
      } else {
        state.firstName = data.firstName;
        state.lastName = data.lastName;
        state.email = data.email;
        state.formSubmitted = true;
        state.formValid = true;
        state.popupType = "valid";
      }
    },
  },
});

export const websiteActions = websiteSlice.actions;
export const websiteReducer = websiteSlice.reducer;
