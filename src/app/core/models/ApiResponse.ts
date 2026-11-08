export interface ApiResponse<T> {
    success: boolean;
    status: number;
    message: string;
    data: T | null;
    errors?: Record<string, string> | null;
    correlationId?: string;
    timestamp: string;
}
