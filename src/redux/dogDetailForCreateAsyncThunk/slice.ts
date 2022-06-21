import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

interface  DogDetailState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState: DogDetailState = {
  loading: true,
  error: null,
  data: null,
}

export const getDogDetail=createAsyncThunk('dogDetail/getDogDetail',async (count: number, thunkAPI) => {
  const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${count}`)
  return response.data
}
)