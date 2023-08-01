import request from '@/utils/request'

enum API {
    HOSPITAL_HOME = "/hosp/hospital/"
}

// 获取医院的数组
export const reqHospital = (page: number, limit: number) => request.get(API.HOSPITAL_HOME + `${page}/${limit}`)