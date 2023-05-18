import {
    configureStore,
    createAsyncThunk,
    createSlice,
  } from "@reduxjs/toolkit";
  import axios from "axios";
import URL from "../utils/FirebaseURL";


  
  const initialState = {
    ads: [],
  };
  

  export const getUsersLikedAds = createAsyncThunk("/liked.json", async (_, { getState }) => {
    const state = getState();
    const uid = state.firebase.auth.uid;
    if (!uid) {
      console.log("Kullanıcı UID bulunamadı");
      return;
    }
  
    try {
      const { data } = await axios.get(`${URL}/${uid}/liked.json`);
      return data.ads;
    } catch (error) {
      console.log("Hata oluştu:", error);
    }
  });
  
  
  const EldeneleSlice = createSlice({
    name: "Eldenele",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(getUsersLikedAds.fulfilled, (state, action) => {
        state.ads = action.payload;
      });
    },
  });
  
  export const store = configureStore({
    reducer: {
      eldenele: EldeneleSlice.reducer,
    },
  });
  
  export const { setAds } = EldeneleSlice.actions;