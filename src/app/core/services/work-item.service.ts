import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse } from '../models/ApiResponse';
import { WorkItemDto } from '../models/WorkItemDto';

@Injectable({ providedIn: 'root' })
export class WorkItemService {
    private readonly http = inject(HttpClient);
    private readonly apiUrl = inject(API_URL);

    getByStatus(status: string): Observable<WorkItemDto[]> {
        return this.http.get<ApiResponse<WorkItemDto[]>>(`${this.apiUrl}/users/status/${status}`).pipe(map((response) => response.data ?? []));
    }
}
