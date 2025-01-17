import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, OnChanges } from '@angular/core';
import { ShowdownComponent } from './showdown.component';
import * as i0 from "@angular/core";
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
export declare class SourceDirective implements OnChanges {
    private _showdownComponent;
    private _http;
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
    src: string;
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
    error: EventEmitter<HttpErrorResponse>;
    constructor(_showdownComponent: ShowdownComponent, _http: HttpClient);
    /**
     * A angular lifecycle method, Use to call to `load` method on src init/changes
     * @internal
     */
    ngOnChanges(): void;
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
    load(url?: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SourceDirective, "showdown[src],[showdown][src]", ["source"], { "src": { "alias": "src"; "required": false; }; }, { "error": "error"; }, never, never, false, never>;
}
