import axiosClient from "./axiosClient"


export const getProgramDataById = async(programId,approchTypeId)=>{
    return axiosClient.get(`/programs/${programId}`).then((res) => res.data.data)
}


export const getPackageDetails = async(data)=>{
    const requestBody = {
        request:{
            data
        }
    }
    return axiosClient.post(`/packagePartners/filtersList`,requestBody).then((res) => res.data.data)

}
