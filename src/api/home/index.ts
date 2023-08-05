import request from '@/utils/request'
import type { HospitalResponseData,HospitalLevelAndRegionResponseData } from './type'

enum API {
    HOSPITAL_HOME = "/hosp/hospital/",
    HOSPITALLEVELANDREGION_URL = '/cmn/dict/findByDictCode/'
}

// 获取医院的数组
export const reqHospital = (page: number, limit: number) => request.get<any, HospitalResponseData>(API.HOSPITAL_HOME + `${page}/${limit}`)

// 获取医院等级获取地区
export const reqHospitalLevelAndRegion = (dictCode: string) => request.get<any,HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL + `${dictCode}`)