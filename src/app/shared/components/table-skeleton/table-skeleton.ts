import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-table-skeleton',
    templateUrl: './table-skeleton.html',
    styleUrl: './table-skeleton.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSkeleton {
    readonly rows = input(6);
    readonly columns = input(5);

    protected readonly rowItems = computed(() => Array.from({ length: this.rows() }, (_, index) => index));
    protected readonly columnItems = computed(() => Array.from({ length: this.columns() }, (_, index) => index));
    protected readonly gridColumns = computed(() => `repeat(${this.columns()}, minmax(0, 1fr))`);
}
