import { createSlice } from '@reduxjs/toolkit'

const mode1 = {
  darkMode: true,
  color1: "#293132",
  color2: "#474044",
  color3: "#4F5165",
  color4: "#547AA5",
  color5: "#50D8D7",
  photo:
    "https://i.guim.co.uk/img/media/dd3882c4ad0fd11a14cffc7e5edaabe5ce8a8b53/0_85_1077_646/master/1077.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=ed76b3cad05b6af61ecb4a059c3294ab",
};

const mode2 = {
  darkMode: false,
  color1: "#6E44FF",
  color2: "#B892FF",
  color3: "#FFC2E2",
  color4: "#FF90B3",
  color5: "#EF7A85",
  photo: "https://placekitten.com/200/300",
};

const initialState = mode2;

export const modeSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        lightMode: () => mode2,
        darkMode: () => mode1
    }
})

export const { lightMode, darkMode } = modeSlice.actions

export default modeSlice.reducer