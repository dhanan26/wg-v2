import axiosClient from "./axiosClient"


export const getProgramDataById = async(programId,approchTypeId)=>{
    return axiosClient.get(`/programs/${programId}`).then((res) => res.data.data)
}
