import { Component, OnInit } from '@angular/core';
import { WorkItemDto } from '@/core/models/WorkItemDto';
import { WorkItemService } from '@/core/services/work-item.service';
import { Table, TableModule } from 'primeng/table';
import { DatePipe, NgClass } from '@angular/common';
import { InputIcon } from 'primeng/inputicon';
import { IconField } from 'primeng/iconfield';
import { Button } from 'primeng/button';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-work-items',
    imports: [TableModule, NgClass, InputIcon, DatePipe, IconField, Button],
    templateUrl: './work-items.html',
    styleUrl: './work-items.scss'
})
export class WorkItemsComponent implements OnInit {
    workItems: WorkItemDto[] = [];
    loading = false;
    totalRecords = 0;

    constructor(private readonly workItemService: WorkItemService) {}

    ngOnInit(): void {
        this.getPendingWorkItems();
    }

    getPendingWorkItems(): void {
        this.loading = true;
        this.workItemService
            .getByStatus('P')
            .pipe(finalize(() => (this.loading = false)))
            .subscribe({
                next: (data: WorkItemDto[]) => {
                    this.workItems = data;
                    this.totalRecords = data.length;
                },
                error: () => undefined
            });
    }

    getRelevanceIcon(relevance: number): string {
        if (relevance >= 8) return 'text-red-500';
        if (relevance >= 5) return 'text-orange-400';
        return 'text-green-500';
    }

    onGlobalFilter(table: Table, event: Event): void {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    clearTableFilters(table: Table): void {
        table.clear();
    }
}
