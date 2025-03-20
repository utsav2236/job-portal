import { createSlice } from "@reduxjs/toolkit";
const jobSclice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        singleJob : null,
    },
    reducers:{
        //actions
        setAllJobs:(state,action) =>{
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action)=>{
            state.singleJob = action.payload;
        }
    }
});
    
export const {setAllJobs,setSingleJob} = jobSclice.actions;
export default jobSclice.reducer;   