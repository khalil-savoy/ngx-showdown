import * as Showdown from 'showdown';
import { ShowdownConfig } from './showdown-config.provider';
import * as i0 from "@angular/core";
/**
 * ### Example
 *
 * Setup as standalone
 * ```typescript
 * import { NgModule } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @NgModule({
 *   providers: [ ShowdownConverter ];
 * })
 * export class AppModule {}
 * ```
 *
 * Use the converter instance.
 * ```typescript
 * import { Injectable } from '@angular/core';
 * import { ShowdownConverter } from 'ngx-showdown';
 *
 * @Injectable()
 * export class SomeService {
 *   constructor(showdownConverter: ShowdownConverter) {
 *     let markdown: string = "**Some**";
 *     let html: string = showdownConverter.makeHtml(markdown);
 *     console.log(`some:\nmarkdown: ${markdown)\nhtml: ${html}\n`);
 *   }
 * }
 * ```
 */
export declare class ShowdownConverter extends Showdown.Converter {
    constructor(config?: ShowdownConfig);
    /**
     * Set options to the converter.
     *
     * @param options - A options object to set.
     */
    setOptions(options: Showdown.ShowdownOptions): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShowdownConverter, [{ optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShowdownConverter>;
}
