import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ApiResponse } from '../models/ApiResponse';

export abstract class BaseApiService<TEntity, TCreate = Partial<TEntity>, TUpdate = TCreate, TId extends string | number = number> {
    protected readonly http = inject(HttpClient);
    private readonly apiUrl = inject(API_URL);

    protected abstract readonly resource: string;

    getAll(): Observable<TEntity[]> {
        return this.unwrap(this.http.get<ApiResponse<TEntity[]>>(this.url()));
    }

    getById(id: TId): Observable<TEntity> {
        return this.unwrap(this.http.get<ApiResponse<TEntity>>(this.url(id)));
    }

    create(dto: TCreate): Observable<TEntity> {
        return this.unwrap(this.http.post<ApiResponse<TEntity>>(this.url(), dto));
    }

    update(id: TId, dto: TUpdate): Observable<TEntity> {
        return this.unwrap(this.http.put<ApiResponse<TEntity>>(this.url(id), dto));
    }

    delete(id: TId): Observable<void> {
        return this.http.delete<void>(this.url(id));
    }

    protected url(...segments: (string | number)[]): string {
        return [this.apiUrl, this.resource, ...segments].join('/');
    }

    protected unwrap<T>(source$: Observable<ApiResponse<T>>): Observable<T> {
        return source$.pipe(
            map((response) => {
                if (response.data === null) {
                    throw new Error(response.message || 'La API no devolvió datos.');
                }

                return response.data;
            })
        );
    }
}
