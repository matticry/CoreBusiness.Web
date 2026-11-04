export interface LoginDto {
    success: boolean
    message: string
    data: {
        token: string
        userId: number
        username: string
        email: string
    }
}
