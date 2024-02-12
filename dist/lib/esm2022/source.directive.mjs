import { Directive, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./showdown.component";
import * as i2 from "@angular/common/http";
/**
 * A angular directive to `ShowdownComponent` for make http request of markdown content.
 *
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { HttpClientModule } from '@angular/common/http';
 * import { ShowdownComponent, SourceDirective } from 'ngx-showdown';
 *
 * @NgModule({
 *    declarations: [ ShowdownComponent, SourceDirective ],
 *    imports: [ HttpClientModule ]
 * })
 * export class AppModule {}
 * ```
 *
 * Bind url `src` directive
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *     selector: 'some',
 *     template: '<showdown [src]="url" smartIndentationFix>**Loading...**</showdown>
 * })
 * class SomeComponent {
 *     url: string = 'https://unpkg.com/ngx-showdown/README.md';
 *     // ...
 * }
 * ```
 *
 * Set static url
 * ```html
 * <showdown src="README.md" [options]="{noHeaderId: true}"></showdown>
 * ```
 *
 * Set template reference variable
 * ```html
 * <showdown #source="source" src="README.md"></showdown>
 * ```
 *
 * Listening to `error` events.
 * ```html
 * <showdown #sd src="http://url.error" (error)="sd.render('# '+$event.message)"></showdown>
 * ```
 */
export class SourceDirective {
    _showdownComponent;
    _http;
    /**
     * The source url of the markdown content.
     *
     * __Example :__
     *
     * Set static url to `src` directive.
     * ```html
     * <showdown src="https://unpkg.com/ngx-showdown/README.md"></showdown>
     * ```
     *
     * Bind url to `src` directive.
     * ```html
     * <input type="text" #url placeholder="url" />
     * <button (click)="src = url.value">Load</button>
     * <showdown [src]="src">**Loading...**</showdown>
     * ```
     */
    src;
    /**
     * On error occur.
     *
     * __Example :__
     *
     * ```html
     * <input type="text" placeholder="url" [(ngModel)]="url"/>
     * <showdown [src]="url" (error)="sd.render('# Error\n> '+$event.message)">**Loading...**</showdown>
     * ```
     */
    error = new EventEmitter();
    constructor(_showdownComponent, _http) {
        this._showdownComponent = _showdownComponent;
        this._http = _http;
    }
    /**
     * A angular lifecycle method, Use to call to `load` method on src init/changes
     * @internal
     */
    ngOnChanges() {
        this.load();
    }
    /**
     * Load the markdown content of {@link SourceDirective#src} url to {@link ShowdownComponent#value}.
     *
     * __Example :__
     *
     * ```html
     * <input type="text" #url value="source.src" placeholder="Url" />
     * <button (click)="source.load(url.value)">Load</button>
     * <showdown #source="source" src="https://unpkg.com/ngx-showdown/README.md"></showdown>
     * ```
     * @param url - A url of markdown content to load (it will override the current url of `SourceDirective#src`)
     */
    load(url) {
        if (url) {
            this.src = url;
        }
        if (this.src) {
            this
                ._http
                .get(this.src, { responseType: 'text' })
                .subscribe((response) => {
                this._showdownComponent.render(response);
            }, (error) => {
                this.error.emit(error);
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SourceDirective, deps: [{ token: i1.ShowdownComponent }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.2", type: SourceDirective, selector: "showdown[src],[showdown][src]", inputs: { src: "src" }, outputs: { error: "error" }, exportAs: ["source"], usesOnChanges: true, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.2", ngImport: i0, type: SourceDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'showdown[src],[showdown][src]',
                    exportAs: 'source'
                }]
        }], ctorParameters: function () { return [{ type: i1.ShowdownComponent }, { type: i2.HttpClient }]; }, propDecorators: { src: [{
                type: Input
            }], error: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zb3VyY2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFHbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4Q0c7QUFLSCxNQUFNLE9BQU8sZUFBZTtJQWlDTjtJQUErQztJQS9CbkU7Ozs7Ozs7Ozs7Ozs7Ozs7T0FnQkc7SUFDTSxHQUFHLENBQVM7SUFFckI7Ozs7Ozs7OztPQVNHO0lBQ08sS0FBSyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBRXRFLFlBQW9CLGtCQUFxQyxFQUFVLEtBQWlCO1FBQWhFLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO0lBQ3BGLENBQUM7SUFFRDs7O09BR0c7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVEOzs7Ozs7Ozs7OztPQVdHO0lBQ0ksSUFBSSxDQUFDLEdBQVk7UUFDdEIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNoQjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUk7aUJBQ0QsS0FBSztpQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQztpQkFDckMsU0FBUyxDQUFDLENBQUMsUUFBZ0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLENBQUMsRUFBRSxDQUFDLEtBQXdCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNILENBQUM7dUdBdkVVLGVBQWU7MkZBQWYsZUFBZTs7MkZBQWYsZUFBZTtrQkFKM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxRQUFRLEVBQUUsUUFBUTtpQkFDbkI7aUlBb0JVLEdBQUc7c0JBQVgsS0FBSztnQkFZSSxLQUFLO3NCQUFkLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNob3dkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9zaG93ZG93bi5jb21wb25lbnQnO1xuXG4vKipcbiAqIEEgYW5ndWxhciBkaXJlY3RpdmUgdG8gYFNob3dkb3duQ29tcG9uZW50YCBmb3IgbWFrZSBodHRwIHJlcXVlc3Qgb2YgbWFya2Rvd24gY29udGVudC5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFNldHVwIGFzIHN0YW5kYWxvbmVcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKiBpbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuICogaW1wb3J0IHsgU2hvd2Rvd25Db21wb25lbnQsIFNvdXJjZURpcmVjdGl2ZSB9IGZyb20gJ25neC1zaG93ZG93bic7XG4gKlxuICogQE5nTW9kdWxlKHtcbiAqICAgIGRlY2xhcmF0aW9uczogWyBTaG93ZG93bkNvbXBvbmVudCwgU291cmNlRGlyZWN0aXZlIF0sXG4gKiAgICBpbXBvcnRzOiBbIEh0dHBDbGllbnRNb2R1bGUgXVxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiAqIGBgYFxuICpcbiAqIEJpbmQgdXJsIGBzcmNgIGRpcmVjdGl2ZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gKlxuICogQENvbXBvbmVudCh7XG4gKiAgICAgc2VsZWN0b3I6ICdzb21lJyxcbiAqICAgICB0ZW1wbGF0ZTogJzxzaG93ZG93biBbc3JjXT1cInVybFwiIHNtYXJ0SW5kZW50YXRpb25GaXg+KipMb2FkaW5nLi4uKio8L3Nob3dkb3duPlxuICogfSlcbiAqIGNsYXNzIFNvbWVDb21wb25lbnQge1xuICogICAgIHVybDogc3RyaW5nID0gJ2h0dHBzOi8vdW5wa2cuY29tL25neC1zaG93ZG93bi9SRUFETUUubWQnO1xuICogICAgIC8vIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogU2V0IHN0YXRpYyB1cmxcbiAqIGBgYGh0bWxcbiAqIDxzaG93ZG93biBzcmM9XCJSRUFETUUubWRcIiBbb3B0aW9uc109XCJ7bm9IZWFkZXJJZDogdHJ1ZX1cIj48L3Nob3dkb3duPlxuICogYGBgXG4gKlxuICogU2V0IHRlbXBsYXRlIHJlZmVyZW5jZSB2YXJpYWJsZVxuICogYGBgaHRtbFxuICogPHNob3dkb3duICNzb3VyY2U9XCJzb3VyY2VcIiBzcmM9XCJSRUFETUUubWRcIj48L3Nob3dkb3duPlxuICogYGBgXG4gKlxuICogTGlzdGVuaW5nIHRvIGBlcnJvcmAgZXZlbnRzLlxuICogYGBgaHRtbFxuICogPHNob3dkb3duICNzZCBzcmM9XCJodHRwOi8vdXJsLmVycm9yXCIgKGVycm9yKT1cInNkLnJlbmRlcignIyAnKyRldmVudC5tZXNzYWdlKVwiPjwvc2hvd2Rvd24+XG4gKiBgYGBcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnc2hvd2Rvd25bc3JjXSxbc2hvd2Rvd25dW3NyY10nLFxuICBleHBvcnRBczogJ3NvdXJjZSdcbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvKipcbiAgICogVGhlIHNvdXJjZSB1cmwgb2YgdGhlIG1hcmtkb3duIGNvbnRlbnQuXG4gICAqXG4gICAqIF9fRXhhbXBsZSA6X19cbiAgICpcbiAgICogU2V0IHN0YXRpYyB1cmwgdG8gYHNyY2AgZGlyZWN0aXZlLlxuICAgKiBgYGBodG1sXG4gICAqIDxzaG93ZG93biBzcmM9XCJodHRwczovL3VucGtnLmNvbS9uZ3gtc2hvd2Rvd24vUkVBRE1FLm1kXCI+PC9zaG93ZG93bj5cbiAgICogYGBgXG4gICAqXG4gICAqIEJpbmQgdXJsIHRvIGBzcmNgIGRpcmVjdGl2ZS5cbiAgICogYGBgaHRtbFxuICAgKiA8aW5wdXQgdHlwZT1cInRleHRcIiAjdXJsIHBsYWNlaG9sZGVyPVwidXJsXCIgLz5cbiAgICogPGJ1dHRvbiAoY2xpY2spPVwic3JjID0gdXJsLnZhbHVlXCI+TG9hZDwvYnV0dG9uPlxuICAgKiA8c2hvd2Rvd24gW3NyY109XCJzcmNcIj4qKkxvYWRpbmcuLi4qKjwvc2hvd2Rvd24+XG4gICAqIGBgYFxuICAgKi9cbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uIGVycm9yIG9jY3VyLlxuICAgKlxuICAgKiBfX0V4YW1wbGUgOl9fXG4gICAqXG4gICAqIGBgYGh0bWxcbiAgICogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJ1cmxcIiBbKG5nTW9kZWwpXT1cInVybFwiLz5cbiAgICogPHNob3dkb3duIFtzcmNdPVwidXJsXCIgKGVycm9yKT1cInNkLnJlbmRlcignIyBFcnJvclxcbj4gJyskZXZlbnQubWVzc2FnZSlcIj4qKkxvYWRpbmcuLi4qKjwvc2hvd2Rvd24+XG4gICAqIGBgYFxuICAgKi9cbiAgQE91dHB1dCgpIGVycm9yOiBFdmVudEVtaXR0ZXI8SHR0cEVycm9yUmVzcG9uc2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3dkb3duQ29tcG9uZW50OiBTaG93ZG93bkNvbXBvbmVudCwgcHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCkge1xuICB9XG5cbiAgLyoqXG4gICAqIEEgYW5ndWxhciBsaWZlY3ljbGUgbWV0aG9kLCBVc2UgdG8gY2FsbCB0byBgbG9hZGAgbWV0aG9kIG9uIHNyYyBpbml0L2NoYW5nZXNcbiAgICogQGludGVybmFsXG4gICAqL1xuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSBtYXJrZG93biBjb250ZW50IG9mIHtAbGluayBTb3VyY2VEaXJlY3RpdmUjc3JjfSB1cmwgdG8ge0BsaW5rIFNob3dkb3duQ29tcG9uZW50I3ZhbHVlfS5cbiAgICpcbiAgICogX19FeGFtcGxlIDpfX1xuICAgKlxuICAgKiBgYGBodG1sXG4gICAqIDxpbnB1dCB0eXBlPVwidGV4dFwiICN1cmwgdmFsdWU9XCJzb3VyY2Uuc3JjXCIgcGxhY2Vob2xkZXI9XCJVcmxcIiAvPlxuICAgKiA8YnV0dG9uIChjbGljayk9XCJzb3VyY2UubG9hZCh1cmwudmFsdWUpXCI+TG9hZDwvYnV0dG9uPlxuICAgKiA8c2hvd2Rvd24gI3NvdXJjZT1cInNvdXJjZVwiIHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL25neC1zaG93ZG93bi9SRUFETUUubWRcIj48L3Nob3dkb3duPlxuICAgKiBgYGBcbiAgICogQHBhcmFtIHVybCAtIEEgdXJsIG9mIG1hcmtkb3duIGNvbnRlbnQgdG8gbG9hZCAoaXQgd2lsbCBvdmVycmlkZSB0aGUgY3VycmVudCB1cmwgb2YgYFNvdXJjZURpcmVjdGl2ZSNzcmNgKVxuICAgKi9cbiAgcHVibGljIGxvYWQodXJsPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHVybCkge1xuICAgICAgdGhpcy5zcmMgPSB1cmw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICB0aGlzXG4gICAgICAgIC5faHR0cFxuICAgICAgICAuZ2V0KHRoaXMuc3JjLCB7cmVzcG9uc2VUeXBlOiAndGV4dCd9KVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2hvd2Rvd25Db21wb25lbnQucmVuZGVyKHJlc3BvbnNlKTtcbiAgICAgICAgfSwgKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgIHRoaXMuZXJyb3IuZW1pdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=