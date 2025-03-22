import { createSlice } from "@reduxjs/toolkit";
const jobSclice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        allAdminJobs: [],
        singleJob: null,
        searchJobByText: ""
    },
    reducers: {
        //actions
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs: (state, action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchByText: (state, action) => {
            state.searchJobByText = action.payload;
        }
    }
});

export const { setAllJobs, setSingleJob, setAllAdminJobs ,setSearchByText} = jobSclice.actions;
export default jobSclice.reducer;   