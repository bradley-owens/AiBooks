import { useDispatch } from "react-redux";
import { websiteActions } from "../store/websiteSlice";
import { bindActionCreators } from "@reduxjs/toolkit";

export const useActions = () => {
  const actions = { ...websiteActions };

  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
